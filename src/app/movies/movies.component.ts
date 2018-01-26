import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';
import { ShoppingListService } from '.././shoppinglist.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movies: any;
	constructor(private movieService: MovieService, private http: HttpClient, private list: ShoppingListService) { }
  ngOnInit() {
  	// this.http.get('http://localhost:3000/movie').subscribe(data => {
  	this.movieService.getMovies().subscribe(data=>{
  		this.movies = data;
  	})
  }
  
  buyMovie(id){
    this.http.get('http://localhost:3000/movie/' + id).subscribe(movie => {
      console.log('hit')
      this.list.shoppingList.push(movie);
      console.log(this.list.shoppingList);
    });
  }
}
