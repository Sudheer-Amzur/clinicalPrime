import { Component, OnInit } from '@angular/core';
import {MessageService} from '../../shared/message.service';
import {FormBuilder,FormControl,FormArray,FormGroup} from '@angular/forms';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-monitoring-metrics',
  templateUrl: './monitoring-metrics.component.html',
  styleUrls: ['./monitoring-metrics.component.css']
})
export class MonitoringMetricsComponent implements OnInit {
  MMform:FormGroup;
  cities: any[];
  cars: any[];
  selectedCar: string;  
  selectedCar2: string = 'BMW';
  fromdt: Date;
  enddt:Date;
  data: any;
  options: any;barchart:any;
  constructor(private message:MessageService,private fb:FormBuilder) { 
    this.message.changeMessage('Monitoring Metrics');
    
  }

  ngOnInit() { 
    this.data = {
      labels: ['A','B','C'],
      datasets: [
          {
              data: [300, 50, 100],
              backgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                  "#FFCE56"
              ]
          }]
        
      };
     
   
    this.cars = [
      {label: 'Audi', value: 'Audi'},
      {label: 'BMW', value: 'BMW'},
      {label: 'Fiat', value: 'Fiat'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'},
      {label: 'VW', value: 'VW'}
      
  ];
  this.cities = [
    {name: 'New York', code: 'NY'},
    {name: 'Rome', code: 'RM'},
    {name: 'London', code: 'LDN'},
    {name: 'Istanbul', code: 'IST'},
    {name: 'Paris', code: 'PRS'}
];
this.createForm();
  }
  createForm() {
    this.MMform = this.fb.group({
      mcc: 'BMW',  
      carrierGp:'',
      commonCG:'',
      transactionType:'',
      fromDate:'',
      endDate:''
    });
  }
}
