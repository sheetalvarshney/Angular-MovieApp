

import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';
import { Model} from '../model/model';
//import {ListService} from './list.service'


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
  //providers:[ListService]
})


export class ListComponent implements OnInit {

	@Input() list:Model;
	//@Output() listData= new EventEmitter();
	detail:Model;
  constructor() {}

  ngOnInit():void {
  	
  	console.log("List", this.list);
  	//this.listData.emit(this.list);
  }

}
