import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { RuleListComponent } from './rule-list/rule-list.component';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import {PaginatorModule} from 'primeng/primeng';
import {DropdownModule} from 'primeng/primeng';
import {ChartModule} from 'primeng/primeng';

 
import {ButtonModule} from 'primeng/primeng';
import {InputTextModule} from 'primeng/primeng';
import {InputSwitchModule} from 'primeng/primeng';
import {DialogModule} from 'primeng/primeng';
import {CalendarModule} from 'primeng/primeng';
import { CarrierRuleConfigComponent } from './carrier-rule-config/carrier-rule-config.component';
import { TurnOnOffWatcherComponent } from './turn-on-off-watcher/turn-on-off-watcher.component';
import { MonitoringMetricsComponent } from './monitoring-metrics/monitoring-metrics.component'; 
@NgModule({
  imports: [
    CommonModule,FormsModule,ReactiveFormsModule,
    AdminRoutingModule,PaginatorModule,DataTableModule,SharedModule,ButtonModule,InputTextModule,DialogModule,DropdownModule,InputSwitchModule,CalendarModule,
    ChartModule
  ],
  declarations: [RuleListComponent, CarrierRuleConfigComponent, TurnOnOffWatcherComponent, MonitoringMetricsComponent],
  exports:[RuleListComponent]
})
export class AdminModule { }
