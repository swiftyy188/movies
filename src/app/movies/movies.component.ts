import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

movies: any;
	constructor(private http: HttpClient) { }
  ngOnInit() {
  	this.http.get('http://localhost:3000/movie').subscribe(data => {
  		this.movies = data;
  	})
  }

}
