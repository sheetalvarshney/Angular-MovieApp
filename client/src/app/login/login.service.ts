import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { LoginModel} from '../model/login.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService{


	constructor(private http:Http){}

	login():Observable<any>{
		
	const loginUrl = 'http://localhost:3030/login';
		return this.http
		.get(loginUrl)
		.map(response=>response.json())
	}

}