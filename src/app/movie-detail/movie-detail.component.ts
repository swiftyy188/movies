import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
movie = {}

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  ngOnInit() {
  	this.getMovieDetail(this.route.snapshot.params['id']);
  }
  getMovieDetail(id){
  	this.http.get('http://localhost:3000/movie/' + id).subscribe(movie => {
  		this.movie = movie;
  		console.log(movie);
  	});
  }
}
