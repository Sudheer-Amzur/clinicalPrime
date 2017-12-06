import { Component, OnInit } from '@angular/core';
import{MenuItem,Message} from 'primeng/primeng';
import {Growl} from 'primeng/primeng';
import { ViewEncapsulation } from "@angular/compiler/src/core";
import{Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-create-rule',
  templateUrl: './create-rule.component.html',
  styleUrls: ['./create-rule.component.css']
 
})
export class CreateRuleComponent implements OnInit {
   
    public ShowBasicInfo:boolean=true;
    public showParameterInfo:boolean=false;
    public showPrevieInfo:boolean=false; 
    public isStep0finish:boolean=false;
    public isStep1finish:boolean=false;
    checked2: boolean = true;
    items: MenuItem[];
    msgs: Message[] = [];
    
    activeIndex: number = 0;
  constructor( public router:Router) { }

  ngOnInit() {
    this.items = [{
                label: 'Basic Info',
                command: (event: any) => {
                    this.activeIndex = 0;
                    // this.msgs.length = 0;
                    // this.msgs.push({severity:'info', summary:'First Step', detail: event.item.label});
                }
            },
            {
                label: 'Rule Parameter Step',
                command: (event: any) => {
                    this.activeIndex = 1;
                    
                    // this.msgs.length = 0;
                    // this.msgs.push({severity:'info', summary:'Seat Selection', detail: event.item.label});
                }
            },
            {
                label: 'Preview&Finish',
                command: (event: any) => {
                    this.activeIndex = 2;
                    
                    // this.msgs.length = 0;
                    // this.msgs.push({severity:'info', summary:'Pay with CC', detail: event.item.label});
                }
            },
            // {
            //     label: 'Confirmation',
            //     command: (event: any) => {
            //         this.activeIndex = 3;
            //         // this.msgs.length = 0;
            //         // this.msgs.push({severity:'info', summary:'Last Step', detail: event.item.label});
            //     }
            // }
        ];
    }
      gotoStep1():void
      {
          this.ShowBasicInfo=false;
          this.showPrevieInfo=false;
          this.showParameterInfo=true;
          this.activeIndex = 1;
          this.isStep0finish=true;
          
      }
      gotostep0():void
      {
        this.ShowBasicInfo=true;
        this.showPrevieInfo=false;
        this.showParameterInfo=false;
         this.activeIndex = 0;
         
      }
      gotoStep2():void
      {
       this.showParameterInfo=false;
       this.ShowBasicInfo=false;
       this.showPrevieInfo=true;
       this.isStep1finish=true;   
       this.activeIndex = 2;
   
      }
     GotoRulelistPage()
              {
                this.router.navigateByUrl('/rule-list');
                
              }     
  }
 


