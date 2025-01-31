import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Movie} from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {
  baseUrl = 'https://api.themoviedb.org/3/';
  apikey = '?api_key=9406ed0141baddd3f8169037803f4f2f';
  public query: string;

  constructor(public http: HttpClient) { }

  // Fix this so it uses a custom datatype
  movieSearch(query: string): Observable<Movie[]> {
    const url = this.baseUrl + 'search/movie' + this.apikey + '&query=' + query;
    return this.http.get(url).pipe(
      map(res => (res as any).results.map((item) => new Movie(item)))
    );
  }

  // Fix this so it uses a custom datatype
  fetchMovieById(mid: string): Observable<Movie> {
    const url = this.baseUrl + 'movie/' + mid + this.apikey;
    return this.http.get<any>(url);
  }
}
