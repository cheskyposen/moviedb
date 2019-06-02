import {Component, OnInit} from '@angular/core';
import {MoviedbService} from '../../../models/moviedb.service';
import {Movie} from '../../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  page = 1;
  pageSize = 3;
  collectionSize: number;
  constructor(
    public moviedb: MoviedbService
  ) {}
  ngOnInit() {
    // when going back it brings back the previous search
    if (this.moviedb.query) { this.movieSearch(); }
  }
  // makes a http call requesting the movie in query
  movieSearch() {
    this.moviedb.movieSearch(this.moviedb.query).subscribe( results => {
      // console.log(results);
      this.movies = results;
      this.collectionSize = this.movies.length;
    });
  }
  // gives the movies according to pagination options and position
  get moviesRes(): Movie[] {
    return this.movies
      .map((movie, i) => ({id: i + 1, ...movie}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
