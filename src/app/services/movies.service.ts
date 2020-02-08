import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {

  private baseUrl = environment.movieBaseUrl;
  private apiKey = environment.omdbApiKey;
  queryURL: string;

  constructor(private http: HttpClient) {}

  createQueryString(title?: string, year?: string, plot?: string): void {

    const titleParametr = title ? `&s=${title}` : '';
    const plotParametr = plot ? `&plot=${plot}` : '';
    const yearParametr = year ? `&y=${year}` : '';

    this.queryURL = `${this.baseUrl}?apikey=${this.apiKey}${titleParametr}${plotParametr}${yearParametr}`;
    console.log(this.queryURL);
  }

  getData() {
    console.log(this.queryURL);
    return this.http.get(this.queryURL);
  }
}

