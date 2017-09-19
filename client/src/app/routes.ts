import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';
import { LoginComponent } from './login/login.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { SearchComponent } from './search/search.component';
import { RegisterComponent } from './register/register.component';
import {HomePageComponent } from './home-page/home-page.component';

const routes:Routes=[
	{
		path:'',
		redirectTo:'/login',
		pathMatch:'full'
	},
	{
		path:'login',
		component:LoginComponent
	},
	{
		path:'register',
		component:RegisterComponent,
	},
	{
		path:'search',
		component:HomePageComponent
	},
	{
		path:'list',
		component:ListComponent
	},
	{
		path:'detail',
		component:DetailComponent
	},
	{
		path:'favourite-list',
		component:FavouriteListComponent
	},
	{
		path:'appComponent',
		component:AppComponent
	},
	{
		path:'home-page',
		component:HomePageComponent
	}

];

@NgModule({
	imports :[RouterModule.forRoot(routes)],
	exports:[RouterModule]
})

export class AppRoutingModule{
}