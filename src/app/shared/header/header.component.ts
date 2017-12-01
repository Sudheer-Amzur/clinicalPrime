import { Component, OnInit } from '@angular/core';
 import{MessageService} from '../message.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private message:MessageService) {
    

   }
  Message:string;
  ngOnInit() {
   this.message.currentMessage.subscribe(message => this.Message = message);
  }
  
}
