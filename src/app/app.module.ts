import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MovieService } from './services/movies.service';

import {
  MatInputModule,
  MatSelectModule,
  MatToolbarModule,
  MatButtonModule,
  MatCardModule
} from '@angular/material';

import {
  RouterModule,
  Routes
} from '@angular/router';
import { MoviesListComponent } from './components/movies-list.component/movies-list.component';
import { MovieItemComponent } from './components/movie-item.component/movie-item.component';
import { ScrollableDirective } from './directives/scrollable.directive';

const routes: Routes = [
  {path: '', redirectTo: 'search', pathMatch: 'full'},
  {path: 'search', component: MoviesListComponent},
  {path: 'movie/:id', component: MoviesListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieItemComponent,
    ScrollableDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
