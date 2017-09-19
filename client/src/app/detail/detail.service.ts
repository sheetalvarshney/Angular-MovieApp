import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Model } from '../model/model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DetailService {

  constructor(private http : Http) { }

    ExpressUrl = 'http://localhost:3030';

   getmovies(movie:any){
      const API_KEY="?api_key=fd5603c1ab1605b78d868c5d690e360d";
      const URL="https://api.themoviedb.org/3/";
      const SEARCH="search/movie";
      const QUERY="&query=";
    	if (movie==" ") {
      		window.alert("Please Enter The Data"); 
		}
 	return this.http
 	.get(URL+SEARCH+API_KEY+QUERY+movie)
 	.map((res:Response)=>res.json());
  }

  create(id:number, title:string, poster_path:string, release_date:string,vote_count:number): any {
    const ExpressUrl=this.ExpressUrl;
    return this.http
      .post(this.ExpressUrl, {id:id, title:title, poster_path:poster_path, release_date:release_date,vote_count:vote_count})
      .map(res => res.json() as Model,(error)=>error.json());
  }

}
