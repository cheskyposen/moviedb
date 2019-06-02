import { Component} from '@angular/core';
import {MoviedbService} from '../../../models/moviedb.service';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../../models/movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  id: string;
  movie: Movie;
  constructor(private moviedb: MoviedbService, private route: ActivatedRoute) {
    // subscribes to url params and searches movie by that id
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('mid');
      this.moviedb.fetchMovieById(this.id).subscribe((res) => this.movie = new Movie(res));
    });
  }
}
