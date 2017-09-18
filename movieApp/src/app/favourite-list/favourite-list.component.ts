import { Component, OnInit,Input } from '@angular/core';
import { Model } from '../model/model';
import { FavouriteListService } from './favourite-list.service';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css'],
  providers:[FavouriteListService]
})
export class FavouriteListComponent implements OnInit {

	@Input() favourite:Model;
	displayData:Model[];
  delData:Model[];
  flag=0;
  constructor(private favouriteListService:FavouriteListService) { }


    display(){
   	this.favouriteListService.getMoviee()
  	.subscribe((displayData )=> { this.displayData = displayData; console.log(displayData);});
   } 


   delete(obj):any{
       this.favouriteListService.deleteMovie(obj.id)
       .subscribe(data=>{this.delData=data})
     }

     likeMovie(obj){
        this.flag=this.flag+1;
       
       this.favouriteListService.updateMovie(obj.id,++obj.vote_count)
       .subscribe(data=>{this.delData=data});
      }

      unlikeMovie(obj){
        this.flag=this.flag+1;
        this.favouriteListService.updateMovie(obj.id,--obj.vote_count)
       .subscribe(data=>{this.delData=data});
     }
     

  ngOnInit() {
  	
  }
}
