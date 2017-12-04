import { Component, OnInit } from '@angular/core';
import {RuleList} from './rule-list';
import { MessageService } from '../../shared/message.service';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.css']
})
export class RuleListComponent implements OnInit {
  

   Rules: RuleList[]
      cols: any[];
      Listdata:any[];
  constructor(private message:MessageService) {this.message.changeMessage("Rule-List"); }

  ngOnInit() {
    
  this.cols = [
            {field: 'RullNo',header:'RullNo'},
            {field: 'Name', header: 'Name'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'color'}
          ];
            this.Rules=[
          {"brand": "VW", "year": 2012, "color": "White","Name": "NARENDRA" ,"RullNo":1},
        {"brand": "Audi", "year": 2011, "color": "Black", "Name": "NARENDRA","RullNo":2},
        {"brand": "Renault", "year": 2005, "color": "Gray", "Name": "NARENDRA","RullNo":3},
        {"brand": "BMW", "year": 2003, "color": "Blue", "Name": "NARENDRA","RullNo":4},
        {"brand": "Mercedes", "year": 1995, "color": "White", "Name": "NARENDRA","RullNo":5},
        {"brand": "Volvo", "year": 2005, "color": "Black", "Name": "NARENDRA","RullNo":6},
        {"brand": "Honda", "year": 2012, "color": "Yellow", "Name": "NARENDRA","RullNo":7},
        {"brand": "Jaguar", "year": 2013, "color": "White", "Name": "NARENDRA","RullNo":8},
        {"brand": "Ford", "year": 2000, "color": "Black", "Name": "NARENDRA","RullNo":9},
        {"brand": "Fiat", "year": 2013, "color": "Red", "Name": "NARENDRA","RullNo":10},
        {"brand": "Volvo", "year": 2012, "color": "White", "Name": "Sudheer","RullNo":11},
        {"brand": "KWd", "year": 2011, "color": "Black", "Name": "Sudheer","RullNo":12},
        {"brand": "Renault", "year": 2005, "color": "Gray", "Name": "Sudheer","RullNo":13},
        {"brand": "BMW", "year": 2003, "color": "Blue", "Name": "Sudheer","RullNo":14},
        {"brand": "Volkswagen", "year": 1995, "color": "White", "Name": "Sudheer","RullNo":15},
        {"brand": "Sovam", "year": 2005, "color": "Black", "Name": "Sudheer","RullNo":16},
        {"brand": "Honda", "year": 2012, "color": "Yellow", "Name": "Sudheer","RullNo":17},
        {"brand": "Jaguar", "year": 2013, "color": "White", "Name": "Sudheer","RullNo":18},
        {"brand": "Ford", "year": 2000, "color": "Black", "Name": "Sudheer","RullNo":19},
        {"brand": "Maruthi", "year": 2013, "color": "Red", "Name": "Sudheer","RullNo":20},
        {"brand": "VW", "year": 2012, "color": "White", "Name": "Siva","RullNo":21},
        {"brand": "Audi", "year": 2011, "color": "Black", "Name": "Siva","RullNo":22},
        {"brand": "Renault", "year": 2005, "color": "Gray", "Name": "Siva","RullNo":23},
        {"brand": "BMW", "year": 2003, "color": "Blue", "Name": "Siva","RullNo":24},
        {"brand": "Mercedes", "year": 1995, "color": "White", "Name": "Siva","RullNo":25},
        {"brand": "Volvo", "year": 2005, "color": "Black", "Name": "Siva","RullNo":26},
        {"brand": "Honda", "year": 2012, "color": "Yellow", "Name": "Siva","RullNo":27},
        {"brand": "Jaguar", "year": 2013, "color": "White", "Name": "Siva","RullNo":28},
        {"brand": "Ford", "year": 2000, "color": "Black", "Name": "Siva","RullNo":29},
        {"brand": "Fiat", "year": 2013, "color": "Red", "Name": "Siva","RullNo":30}
            ]

      
}
}