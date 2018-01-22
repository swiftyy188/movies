import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-movie-create',
  templateUrl: './movie-create.component.html',
  styleUrls: ['./movie-create.component.css']
})
export class MovieCreateComponent implements OnInit {
movie = {}
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
  }

  saveMovie(){
  	this.http.post("http://localhost:3000/movie", this.movie).subscribe(res => {
  		this.router.navigate(['/movies'])
  	}, (err) => {
  		console.log(err);
  	});
  };
};
