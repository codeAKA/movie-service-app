import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { MovieModel } from '../models/movie.model';

@Injectable()
export class MovieService {

  private baseUrl = environment.movieBaseUrl;
  private apiKey = environment.omdbApiKey;
  private pagesNumber = 10;

  constructor(private http: HttpClient) {}

  searchMovie(term: string): Observable<MovieModel[]> {

    let queryURL = `${this.baseUrl}?apikey=${this.apiKey}&s=${term}&page=${this.pagesNumber}`;

    return this.http.get(queryURL)
          .pipe(map(res => {
            return res.Search.map(item => {
              return new MovieModel(
                item.Title,
                item.Year,
                item.imdbID,
                item.Type,
                item.Poster
              );
            });
          })
        );
  }
}

