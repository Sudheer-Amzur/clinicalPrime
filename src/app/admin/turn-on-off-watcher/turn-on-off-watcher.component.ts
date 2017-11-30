import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../shared/message.service';
@Component({
  selector: 'app-turn-on-off-watcher',
  templateUrl: './turn-on-off-watcher.component.html',
  styleUrls: ['./turn-on-off-watcher.component.css']
})
export class TurnOnOffWatcherComponent implements OnInit {

  constructor(private message:MessageService) { }
  IsRxtranswatcher: boolean = false;
  IsRulesEngineWatcher: boolean = false;
  IsWorkFlowWatcher: boolean = false;

  ngOnInit() {
    this.message.changeMessage("Turn-On/Off-Watcher settings");
  }

}
