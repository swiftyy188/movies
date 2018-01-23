import { Component, OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.css']
})
export class MovieEditComponent implements OnInit {
  movie = {}

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	this.getMovieDetail(this.route.snapshot.params['id']);
  }
  getMovieDetail(id){
  	this.http.get('http://localhost:3000/movie/' + id).subscribe(movie => {
  		this.movie = movie;
  	});
  }
  saveMovie(id){
  	this.http.put('http://localhost:3000/movie/' + id, this.movie).subscribe(res => {
  		this.router.navigate(['/movies'])
  	}, (err)=> {
  		console.log(err);
  	})
  }
}