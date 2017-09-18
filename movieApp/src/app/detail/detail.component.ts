


import { Component, OnInit,Input } from '@angular/core';
import { DetailService } from './detail.service';
import { ListComponent } from '../list/list.component';
import { Model } from '../model/model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
  providers:[DetailService]
})

export class DetailComponent implements OnInit {
	@Input() movie:any;

    favList:Model[];
	p:number=1;
  constructor(private detailService : DetailService) { }

  getMovie(data){
  this.detailService.getmovies(data)
  .subscribe((data)=> {data=this.movie;console.log(this.movie);});
	}

   insertMovie(movie):any{
     this.detailService.create(movie.id, movie.title, movie.poster_path, movie.release_date, movie.vote_count)
     .subscribe(favList =>{this.favList = this.movie;})
     }


  ngOnInit() {
  }

}
