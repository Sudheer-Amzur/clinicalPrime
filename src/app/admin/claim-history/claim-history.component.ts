import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/message.service';
import { ClaimHistory } from './claim-history';
@Component({
  selector: 'claim-history',
  templateUrl: './claim-history.component.html',
  styleUrls: ['./claim-history.component.css']
})
export class ClaimHistoryComponent implements OnInit {
  claims: ClaimHistory[];

  cols: any[];

  selectedClaim: ClaimHistory;

  dialogVisible: boolean;

  constructor(private message: MessageService) { }

  ngOnInit() {
    this.cols = [
      { field: 'ClaimID', header: 'ClaimID' },
      { field: 'ClaimNumber', header: 'Claim Number' },
      { field: 'ClaimType', header: 'Claim Type' },
      { field: 'SOJ', header: 'SOJ' }
    ];
    this.claims = [
      { "ClaimID": 1, "ClaimNumber": 20122456891, "ClaimType": "W", "SOJ": "FL" },
      { "ClaimID": 2, "ClaimNumber": 20122456892, "ClaimType": "W", "SOJ": "FL" },
      { "ClaimID": 3, "ClaimNumber": 20122456893, "ClaimType": "W", "SOJ": "FL" },
      { "ClaimID": 4, "ClaimNumber": 20122456894, "ClaimType": "W", "SOJ": "FL" },
      { "ClaimID": 5, "ClaimNumber": 20122456895, "ClaimType": "W", "SOJ": "FL" },
      { "ClaimID": 6, "ClaimNumber": 20122456896, "ClaimType": "W", "SOJ": "FL" },
      { "ClaimID": 7, "ClaimNumber": 20122456897, "ClaimType": "W", "SOJ": "FL" },
      { "ClaimID": 8, "ClaimNumber": 20122456898, "ClaimType": "W", "SOJ": "FL" },
      { "ClaimID": 9, "ClaimNumber": 20122456898, "ClaimType": "W", "SOJ": "FL" },
      { "ClaimID": 10, "ClaimNumber": 20122456890, "ClaimType": "W", "SOJ": "FL" },
      { "ClaimID": 11, "ClaimNumber": 20122456810, "ClaimType": "W", "SOJ": "FL" },

    ]
    this.message.changeMessage("Claim History");
  }

}
