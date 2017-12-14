import { Component, OnInit } from '@angular/core';
import { MenuItem, Message } from 'primeng/primeng';
import { Growl } from 'primeng/primeng';
import { ViewEncapsulation } from "@angular/compiler/src/core";
import { Router, ActivatedRoute } from '@angular/router';
import { Dropdown } from './Dropdown'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms/src/model';
import { values } from 'd3-collection';
import { delay } from 'q';

@Component({
    selector: 'app-create-rule',
    templateUrl: './create-rule.component.html',
    styleUrls: ['./create-rule.component.css']
   
})
export class CreateRuleComponent implements OnInit {

    public ShowBasicInfo: boolean = true;
    public showParameterInfo: boolean = false;
    public showPrevieInfo: boolean = false;
    public isStep0finish: boolean = false;
    public isStep1finish: boolean = false;
    // checked2: boolean = true;
    items: MenuItem[];
    msgs: Message[] = [];
    rForm: FormGroup;
    
    pValueform: FormGroup;
    parmeterform: FormGroup;
    activeIndex: number = 0;
    countries: Dropdown[];
    States: Dropdown[];
    workflow:Dropdown[];
    add:any[];
    constructor(public router: Router, private fb: FormBuilder) {
        this.rForm = fb.group({
            'RuleName': [null, Validators.required],
            'startDate': [null, Validators.required],
            'EndDate': [null],
            'RuleCode': [null, Validators.required],
            'GroupName': [null, Validators.required],
            'checked2': [true, Validators.required]
        });

    }



    ngOnInit() {
        this.createpform();
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
        this.countries = [{ Id: 1, Name: 'India' },
        { Id: 2, Name: 'Au' },
        { Id: 3, Name: 'US' },
        { Id: 4, Name: 'SL' }
        ];
        this.States = [{ Id: 1, Name: 'Krishna' },
        { Id: 2, Name: 'EG' },
        { Id: 3, Name: 'US' },
        { Id: 4, Name: 'SL' }
        ];
        this.workflow =[{Id:1,Name:'MedReview'}];
    }
    gotoStep1(): void {
        this.ShowBasicInfo = false;
        this.showPrevieInfo = false;
        this.showParameterInfo = true;
        this.activeIndex = 1;
        this.isStep0finish = true;

    }
    gotostep0(): void {
        this.ShowBasicInfo = true;
        this.showPrevieInfo = false;
        this.showParameterInfo = false;
        this.activeIndex = 0;

    }
    gotoStep2(): void {
        this.showParameterInfo = false;
        this.ShowBasicInfo = false;
        this.showPrevieInfo = true;
        this.isStep1finish = true;
        this.activeIndex = 2;

    }
    GotoRulelistPage() {
        this.router.navigateByUrl('/rule-list');

    }
    createpform() {
        this.pValueform = this.fb.group({
            id: '',
            valuelist: this.fb.array([this.buildparmetervalues()]),
            workflow: ['']
        })
    }
    get valuelist(): FormArray {
        return this.pValueform.get('valuelist') as FormArray;
    };
    AddParmetervalue(i: number, data: any) {

        this.valuelist.insert(i + 1, this.buildparmetervalues())
    }

    buildparmetervalues(): FormGroup {
        return this.fb.group({
            selectContry: ['', Validators.required],
            selectedState: ['', Validators.required],
            txtvalues: ['', Validators.required]
            
        })

    }
    removeparm(i:number){
        const control= <FormArray>this.pValueform.controls["valuelist"];
        control.removeAt(i);
    }
    showSuccess() {
        this.msgs = [];
        this.msgs.push({severity:'success', summary:'Success Message', detail:'create-rules submitted'});
        setTimeout(() => {
            this.router.navigateByUrl('/rule-list');
        }, 1000);
        
    }
        
    
   
}



