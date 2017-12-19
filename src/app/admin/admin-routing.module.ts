import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleListComponent } from './rule-list/rule-list.component';
import {CarrierRuleConfigComponent} from './carrier-rule-config/carrier-rule-config.component';
import {TurnOnOffWatcherComponent} from './turn-on-off-watcher/turn-on-off-watcher.component';
import {ClaimantHistoryComponent} from './claimant-history/claimant-history.component';
import { MonitoringMetricsComponent } from './monitoring-metrics/monitoring-metrics.component';
 
 import { CreateRuleComponent } from './create-rule/create-rule.component';
 import {D3graphComponent} from './d3graph/d3graph.component'

const routes: Routes = [
  {path:'rule-list',component:RuleListComponent},
  {path:'CRC',component:CarrierRuleConfigComponent},
  {path:'TWC',component:TurnOnOffWatcherComponent},
  {path:'claimant-history',component:ClaimantHistoryComponent},  
  { path: 'create-rule', component: CreateRuleComponent },
  { path: 'Mmetrics', component: MonitoringMetricsComponent },
  {path:'D3Graph',component:D3graphComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
