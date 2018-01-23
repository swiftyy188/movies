import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms/';

import { AppComponent } from './app.component';
import { CallbackComponent } from './callback.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieService } from './movie.service';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieCreateComponent } from './movie-create/movie-create.component';
import { MovieEditComponent } from './movie-edit/movie-edit.component';

const appRoutes: Routes = [
  {
    path: 'movie-edit/:id',
    component: MovieEditComponent,
    data: {title: 'Movie Edit'}
  },
  {
    path: 'movie-create',
    component: MovieCreateComponent,
    data: {title: 'Movie Create'}
  },
  {
    path: 'movie-detail/:id',
    component: MovieDetailComponent,
    data: {title: 'Movie Details'}
  },
	{
		path: 'movies',
		component: MoviesComponent
	},
	{
		path: '',
		redirectTo: 'movies',
		pathMatch: 'full'
	},
  {
    path: 'home',
    component: MoviesComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    MoviesComponent,
    MovieDetailComponent,
    MovieCreateComponent,
    MovieEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
    	appRoutes,
    	{ enableTracing: true}// debugging purpose only
    	)
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
