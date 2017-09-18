import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { LoginModel } from '../model/login.model';
import { Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[LoginService]
})
export class LoginComponent implements OnInit {

	loginData:any={};

  constructor(private loginService:LoginService, private router:Router) { }

  rightCredential(){
  	alert("successfully login")
  	this.router.navigateByUrl('search')
  }

  wrongCredential(){
  	alert("wrong credential")
  	this.router.navigateByUrl('login')
  }

  enterData(loginData:any){
   loginData.filter((event)=>{
      console.log(event);
  	  (event.emailId==this.loginData.emailId
  	  && event.password==this.loginData.password) ? 
  	  this.rightCredential():false })
      }

  login(loginData){
    console.log(loginData)
    console.log(this.loginData)
    this.loginService.login()
  	.subscribe((login)=> { console.log("af",login);    });
     
  }

//this.enterData(login)

 // login(loginData){
 //    console.log(loginData)
 //    console.log(this.loginData)
 //    this.loginService.login()
 //    .subscribe((login)=> {
 //     console.log("af",login);  
 //     if((loginData.password==login && (loginData.emailId!=undefined || loginData.password!=undefined))){
 //       this.router.navigateByUrl('/home');
 //     }
 //   });
 //  }

  callRegister(){
    this.router.navigateByUrl('register');
  }

  ngOnInit() {
  }

}
