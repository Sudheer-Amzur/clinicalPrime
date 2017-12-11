import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'rule-list',redirectTo:'rule-list',pathMatch:'full'},
  {path:'CRC',redirectTo:'CRC'},
  {path:'TWC',redirectTo:'TWC'},
  { path: 'create-rule', redirectTo: 'create-rule' },
  { path: 'Mmetrics', redirectTo: 'Mmetrics' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
