import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieService } from '../../../services/movies.service';
import { Observable } from 'rxjs';
import { MovieModel } from 'src/app/models/movie.model';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/Operators';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  private loading = false;
  private searchForm: FormGroup;
  private results: Observable<MovieModel[]>;

  constructor(fb: FormBuilder, private moveieService: MovieService) {
    this.searchForm = fb.group({
      titleField: [''],
      yearField: [''],
      plotField: ['']
    });
   }

  ngOnInit() {
    this.results = this.searchForm.controls.titleField.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term => this.moveieService.searchMovie(term))
    );
  }

  // submitSearch() {
  //   console.log('something');
  //   const titleToSearch = this.searchForm.controls.titleField.value;
  //   const yearToSearch = this.searchForm.controls.yearField.value;
  //   const plotToSearch = this.searchForm.controls.plotField.value;
  //   console.log(titleToSearch);
  //   if (titleToSearch !== '' || yearToSearch !== '' || plotToSearch !== '') {
  //     console.log(titleToSearch);
  //     this.moveieService.createQueryString(titleToSearch, yearToSearch, plotToSearch);
  //     return this.moveieService.getData().subscribe(data => {
  //       console.log(data);
  //     });
  //   }
  //   return;
  // }

  resetForm() {
    this.searchForm.reset();
  }
}
