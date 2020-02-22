import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { MovieModel } from 'src/app/models/movie.model';
import { debounceTime, distinctUntilChanged, switchMap, tap } from 'rxjs/Operators';
import { MovieService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  private loading = false;
  public searchForm: FormGroup;
  results: Observable<MovieModel[]>;

  constructor(fb: FormBuilder, private moveieService: MovieService) {
    this.searchForm = fb.group({
      titleField: [''],
      yearField: [''],
      plotField: ['']
    });
   }

  ngOnInit() {
    // this.searchForm.controls.titleField.valueChanges.pipe(
    //   tap(val => console.log(`BEFORE MAP: ${val}`)),
    //   debounceTime(500),
    //   distinctUntilChanged(),
    //   switchMap(term => this.moveieService.searchMovie(term))
    // ).subscribe(data => console.log(data));
  }

  submitSearch(term: string) {
    // this.moveieService.searchMovie(term).subscribe(data => {
    //   console.log(data);
    // });
    this.loading = true;
    this.results = this.moveieService.searchMovie(term);
    this.moveieService.searchMovie(term).subscribe(data => console.log(data));
    console.log(this.results);
  }

  resetForm() {
    this.searchForm.reset();
  }
}
