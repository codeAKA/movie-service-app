import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MovieService } from '../../../services/movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  public searchForm: FormGroup;

  constructor(fb: FormBuilder, private moveieService: MovieService) {
    this.searchForm = fb.group({
      titleField: [''],
      yearField: [''],
      plotField: ['']
    });
   }

  ngOnInit() {
  }

  submitSearch() {
    console.log('something');
    const titleToSearch = this.searchForm.controls.titleField.value;
    const yearToSearch = this.searchForm.controls.yearField.value;
    const plotToSearch = this.searchForm.controls.plotField.value;
    console.log(titleToSearch);
    if (titleToSearch !== '' || yearToSearch !== '' || plotToSearch !== '') {
      console.log(titleToSearch);
      this.moveieService.createQueryString(titleToSearch, yearToSearch, plotToSearch);
      return this.moveieService.getData().subscribe(data => {
        console.log(data);
      });
    }
    return;
  }

  resetForm() {
    this.searchForm.reset();
  }
}
