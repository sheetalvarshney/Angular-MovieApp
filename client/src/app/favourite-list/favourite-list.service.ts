import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Model} from '../model/model';
import 'rxjs/add/operator/map';
import { Observable} from 'rxjs/Observable';

@Injectable()
export class FavouriteListService {

  ExpressUrl = 'http://localhost:3030';

  constructor(private http:Http) { }


	getMoviee(): Observable<Model[]>{
    return this.http
    .get(this.ExpressUrl)
    .map((response) => response.json() as Model[]);
   	}



	deleteMovie(id:number):Observable<Model[]>{
	  const delUrl =`${this.ExpressUrl}/users/${id}`;
	  return this.http
	  .delete(delUrl)
	  .map((res)=>  res.json() as Model[]);
	}

   updateMovie(id:number, vote_count):Observable<Model[]>{
	  const delUrl =`${this.ExpressUrl}/users/${id}`;
	  return this.http
	  .put(delUrl, {id:id,vote_count:vote_count})
	  .map((res)=>  res.json() as Model[]);
	}
}
