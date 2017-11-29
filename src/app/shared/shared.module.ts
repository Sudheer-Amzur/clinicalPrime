import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { SharedRoutingModule } from './shared-routing.module';

import {MenubarModule,MenuItem} from 'primeng/primeng';
import {SidebarModule} from 'primeng/primeng'; 
import { HeaderComponent } from './header/header.component';
import { LeftMenuComponent } from './left-menu/left-menu.component';

@NgModule({
  imports: [
    CommonModule,
    SharedRoutingModule,
    BrowserAnimationsModule,
    MenubarModule,
    SidebarModule
  ],
  declarations: [HeaderComponent, LeftMenuComponent],
  exports:[HeaderComponent,LeftMenuComponent]
})
export class SharedModule { }
