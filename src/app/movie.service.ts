import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

getMovies(){
	return this.http.get('http:///localhost:3000/movie')
	.pipe(
		catchError(this.handleError)
		 );
	}
popup(item){
		alert("Added " + item.name + " Shopping List");
	}
	private handleError(err: HttpClient | any){
		console.error('an error occured', err);
		return Observable.throw(err.message || err);
	}
}
