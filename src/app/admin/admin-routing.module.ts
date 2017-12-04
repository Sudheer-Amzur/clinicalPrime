import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleListComponent } from './rule-list/rule-list.component';
import {CarrierRuleConfigComponent} from './carrier-rule-config/carrier-rule-config.component';
import {TurnOnOffWatcherComponent} from './turn-on-off-watcher/turn-on-off-watcher.component';
import { MonitoringMetricsComponent } from './monitoring-metrics/monitoring-metrics.component';
 

const routes: Routes = [
  {path:'rule-list',component:RuleListComponent},
  {path:'CRC',component:CarrierRuleConfigComponent},
  {path:'TWC',component:TurnOnOffWatcherComponent},
  {path:'Mmetrics',component:MonitoringMetricsComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
