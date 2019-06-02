export class Movie {

  voteCount: number;
  id: number;
  video: boolean;
  voteAverage: number;
  title: string;
  popularity: number;
  posterPath: string;
  language: string;
  genreIds: Array<number>;
  backdropPath: string;
  adult: boolean;
  overview: string;
  releaseDate: Date;

  constructor(args?) {
    this.voteCount = args.vote_count;
    this.id = args.id;
    this.video = args.video;
    this.voteAverage = args.vote_average;
    this.title = args.title;
    this.popularity = args.popularity;
    this.posterPath = args.poser_path;
    this.language = args.language;
    this.genreIds = args.genre_ids;
    this.backdropPath = args.backdrop_path;
    this.adult = args.adult;
    this.overview = args.overview;
    this.releaseDate = new Date(args.release_date);
  }

}
