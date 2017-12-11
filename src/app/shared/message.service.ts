import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
@Injectable()
export class MessageService {
  private messageSource = new BehaviorSubject<string>("default message");
  private pageHeader = new BehaviorSubject<string>("default message");
  currentMessage = this.messageSource.asObservable();
  currentPage = this.pageHeader.asObservable();
  constructor() { }
  changeMessage(message: string) {
    this.messageSource.next(message)
  }

  changepageHeader(message: string) {
    debugger;
    this.pageHeader.next(message)
  }

}
