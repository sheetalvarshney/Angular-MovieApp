import { Injectable } from '@angular/core';
import { LoginModel } from '../model/login.model';
import { Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RegisterService{
	constructor(private http:Http){}

	register(registerData:any){
		const registerUrl='http://localhost:3030/register';
		return this.http
		.post(registerUrl,registerData)
		.map((res:Response)=>{console.log(res); 
			return res.json() as LoginModel;})
	}


}