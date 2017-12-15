import { Component, OnInit } from '@angular/core';
import { RuleList } from './rule-list';
import { Router, ActivatedRoute } from '@angular/router';
import { Message, ProgressSpinner } from 'primeng/primeng';
import { Ng4LoadingSpinnerModule, Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.css']
})
export class RuleListComponent implements OnInit {


  Rules: RuleList[]
  cols: any[];
  Listdata: any[];
  value: boolean = true;
  template: string = `<img src="D:/PrimeNG/clinicalPrime/src/images/common-loader.gif">`
  msgs: Message[];
  constructor(public router: Router, private ng4LoadingSpinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    
    this.cols = [
      { field: 'RuleCode', header: 'Rule Code' },
      { field: 'RuleName', header: 'Rule Name' },
      { field: 'StartDate', header: 'Start Date' },
      { field: 'EndDate', header: 'End Date' },
      { field: 'GroupName', header: 'Group Name' },
      { field: 'RuleConditions', header: 'Rule Conditions' },
      { field: 'Status', header: 'Status' },
    ];
    this.Rules = [
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" },
      { "RuleCode": "1", "RuleName": "Narendra", "StartDate": "White", "EndDate": "NARENDRA", "GroupName": 1, "RuleConditions": 2, "Status": "Active" }

    ]


  }
  GotoRulesConfiguration() {
    this.value = false;
    this.msgs = [];
    this.msgs.push({ severity: 'info', summary: 'Success', detail: 'Process Completed' });
//    this.ng4LoadingSpinnerService.show();
    
    setTimeout(() => {
      //this.ng4LoadingSpinnerService.hide();
      this.router.navigateByUrl('/create-rule');
    }, 100000);
  }
}