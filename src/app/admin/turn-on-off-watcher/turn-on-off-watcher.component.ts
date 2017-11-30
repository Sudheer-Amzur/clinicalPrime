import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-turn-on-off-watcher',
  templateUrl: './turn-on-off-watcher.component.html',
  styleUrls: ['./turn-on-off-watcher.component.css']
})
export class TurnOnOffWatcherComponent implements OnInit {

  constructor() { }
  IsRxtranswatcher :boolean = false;
  IsRulesEngineWatcher :boolean = false;
  IsWorkFlowWatcher :boolean = false;

  ngOnInit() {    
  }

}
