import {Component, OnInit} from '@angular/core';
import {MoviedbService} from '../../../models/moviedb.service';
import {Movie} from '../../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  query = '';
  movies: Movie[];
  page = 1;
  pageSize = 4;
  collectionSize: number;
  constructor(
    public moviedb: MoviedbService
  ) {}
  ngOnInit() {
    if (this.moviedb.query) { this.movieSearch(); }
  }

  movieSearch() {
    this.moviedb.movieSearch(this.moviedb.query).subscribe( results => {
      // console.log(results);
      this.movies = results;
      this.collectionSize = this.movies.length;
    });
  }

  get moviesRes(): Movie[] {
    return this.movies
      .map((movie, i) => ({id: i + 1, ...movie}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
