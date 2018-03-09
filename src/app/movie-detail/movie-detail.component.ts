import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingListService } from '.././shoppinglist.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
movie = {}

  constructor(private router: Router, private route: ActivatedRoute, private http: HttpClient, private list: ShoppingListService) { }
  shoppingList = []
  quantity = [ 1,2,3,4,5,6,7,8,9,10 ];
  quantityItem;

  ngOnInit() {
  	this.getMovieDetail(this.route.snapshot.params['id']);
    this.shoppingList = this.list.shoppingList
  };

  getMovieDetail(id){
  	this.http.get('http://localhost:3000/movie/' + id).subscribe(movie => {
  		this.movie = movie;
  		console.log(movie);
  	});
  };

  deleteMovie(id){
    this.http.delete('http://localhost:3000/movie/' + id)
    .subscribe(res =>{
      this.router.navigate(['/movies/']);
    }, (err) =>{
      console.log(err);
    });
  };
  buyMovie(id){
     console.log(this.movie);
     this.list.shoppingList.push(this.movie);
     console.log(this.list.shoppingList);
  };
};
