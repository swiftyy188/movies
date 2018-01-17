import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

movies: any;
	constructor(private movieService: MovieService) { }
  ngOnInit() {
  	// this.http.get('http://localhost:3000/movie').subscribe(data => {
  	this.movieService.getMovies().subscribe(data=>{
  		this.movies = data;
  	})
  }

}
