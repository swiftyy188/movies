import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CallbackComponent } from './callback.component';
import { MoviesComponent } from './movies/movies.component';

const appRoutes: Routes = [
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
    MoviesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
    	appRoutes,
    	{ enableTracing: true}// debugging purpose only
    	)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
