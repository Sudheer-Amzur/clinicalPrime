import { Component, OnInit } from '@angular/core';
import {RuleList} from './rule-list';
import{Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-rule-list',
  templateUrl: './rule-list.component.html',
  styleUrls: ['./rule-list.component.css']
})
export class RuleListComponent implements OnInit {
  

   Rules: RuleList[]
      cols: any[];
      Listdata:any[];
  constructor( public router:Router) { }

  ngOnInit() {
  
  this.cols = [
            {field: 'RuleCode',header:'Rule Code'},
            {field: 'RuleName', header: 'Rule Name'},
            {field: 'StartDate', header: 'Start Date'},
            {field: 'EndDate', header: 'End Date'},
            {field: 'GroupName', header: 'Group Name'},
            {field: 'RuleConditions', header:'Rule Conditions'},
            {field:'Status',header:'Status'},
          ];
            this.Rules=[
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"},
          {"RuleCode": "1", "RuleName": "Narendra", "StartDate": "White","EndDate": "NARENDRA" ,"GroupName":1,"RuleConditions":2,"Status":"Active"}
          
            ]

      
}
     GotoRulesConfiguration()
              {
                this.router.navigateByUrl('/create-rule');
                
              }     
}