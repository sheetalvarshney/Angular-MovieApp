import { Component,OnInit } from '@angular/core';
import { RegisterService } from './register.service';
import { Router } from '@angular/router';
import { LoginModel } from '../model/login.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})

export class RegisterComponent implements OnInit{

registerData:any={};
user:any={};
refer:any={};
	constructor(private registerService:RegisterService,
		private route:Router){	}

	register(registerData){
		this.registerService.register(registerData)
		.subscribe((refer)=>{
			this.user=refer;
			console.log(this.user.message);

// 			console.log(this.user.emailId,"Comparing",registerData.emailId)
	window.alert(this.user.message);
 		});


		this.route.navigateByUrl('login');
}
	

	ngOnInit(){

	}
}