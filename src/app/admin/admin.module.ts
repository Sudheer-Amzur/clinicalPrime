import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { RuleListComponent } from './rule-list/rule-list.component';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {PaginatorModule} from 'primeng/primeng';
 

 
import {ButtonModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import { CarrierRuleConfigComponent } from './carrier-rule-config/carrier-rule-config.component'; 
@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,PaginatorModule,DataTableModule,SharedModule,ButtonModule,InputTextModule,DialogModule
  ],
  declarations: [RuleListComponent, CarrierRuleConfigComponent],
  exports:[RuleListComponent]
})
export class AdminModule { }
