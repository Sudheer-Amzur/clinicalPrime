import { Component } from '@angular/core';
import {MessageService} from './shared/message.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  pageName = '';
  constructor(private service:MessageService){
    this.service.currentPage.subscribe(test=> this.pageName=test);
  }
}
