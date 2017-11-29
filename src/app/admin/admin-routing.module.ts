import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RuleListComponent } from './rule-list/rule-list.component';
import {CarrierRuleConfigComponent} from './carrier-rule-config/carrier-rule-config.component';
 

const routes: Routes = [
  {path:'rule-list',component:RuleListComponent},
  {path:'CRC',component:CarrierRuleConfigComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
