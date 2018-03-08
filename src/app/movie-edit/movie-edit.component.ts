import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie;
  rating:number;
  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this.getMovieDetail(this.route.snapshot.params['id']);
  }
  getMovieDetail(id){
  	this.http.get('http://localhost:3000/movie/' + id).subscribe(movie => {
  		this.movie = movie;
      this.rating = this.movie.rating.length
  	});
  }
  saveMovie(id){
    var i = 0;
    var array = [];
    while ( i < this.rating){
      array.push(i);
      i = i + 1;
    }
    this.movie.rating = array;

  	this.http.put('http://localhost:3000/movie/' + id, this.movie).subscribe(res => {
  		this.router.navigate(['/movies'])
  	}, (err)=> {
  		console.log(err);
  	})
  }
}