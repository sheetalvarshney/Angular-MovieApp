import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Model} from '../model/model';
import { SearchService } from './search.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers:[SearchService]
})
export class SearchComponent implements OnInit {
  detail:Model[];
	@Output() searchData = new EventEmitter();

  constructor(private searchService:SearchService) { }


  search(data):any{
		this.searchService.search(data)
		.subscribe((data)=> {console.log(data);this.searchData.emit(data);});
		}

   ngOnInit() {
  }
}
