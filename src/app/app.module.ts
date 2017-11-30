import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import {SharedModule} from './shared/shared.module';
import {AdminModule} from './admin/admin.module';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations'
import {enableProdMode} from '@angular/core';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AdminModule,
   BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
enableProdMode();
