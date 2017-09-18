import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Model } from '../model/model';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {

  constructor(private http:Http) { }


  search(movie : string):Observable<Model[]>{
    const movieUrl : string = "http://api.themoviedb.org/3/search/movie?api_key=fd5603c1ab1605b78d868c5d690e360d&query="+movie;
    return this.http
		.get(movieUrl)
		.map((result) => <Model[]>result.json() ,(error)=>error.json()); 
		}
}
