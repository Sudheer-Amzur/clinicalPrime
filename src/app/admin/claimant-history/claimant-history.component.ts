import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/message.service';
import { ClaimantHistory } from './claimant-history';
@Component({
  selector: 'claimant-history',
  templateUrl: './claimant-history.component.html',
  styleUrls: ['./claimant-history.component.css']
})
export class ClaimantHistoryComponent implements OnInit {
  claimants: ClaimantHistory[];

  cols: any[];

  selectedCar: ClaimantHistory;

  dialogVisible: boolean;

  constructor(private message: MessageService) { }

  ngOnInit() {
    this.cols = [
      { field: 'ClaimantID', header: 'Claimant ID' },
      { field: 'FirstName', header: 'First Name' },
      { field: 'LastName', header: 'Last Name' }
    ];
    this.claimants = [
      { "ClaimantID": 1, "FirstName": "Rose", "LastName": "White" },
      { "ClaimantID": 2, "FirstName": "Chrys", "LastName": "White" },
      { "ClaimantID": 3, "FirstName": "Tulip", "LastName": "White" },
      { "ClaimantID": 4, "FirstName": "Marie", "LastName": "Gold" },
      { "ClaimantID": 5, "FirstName": "Flora", "LastName": "Red" },
      { "ClaimantID": 6, "FirstName": "maple", "LastName": "White" },
      { "ClaimantID": 7, "FirstName": "Hugo", "LastName": "Boss" },
      { "ClaimantID": 8, "FirstName": "Tommy", "LastName": "Hilfiger" },
      { "ClaimantID": 9, "FirstName": "Louis", "LastName": "Philippe" },
      { "ClaimantID": 10, "FirstName": "Louis", "LastName": "Vuitton" },
      { "ClaimantID": 11, "FirstName": "mont", "LastName": "White" },

    ]
    this.message.changeMessage("Claimant History");

 }
 getClaimantID(claimId:number){
  debugger;
} 

}
