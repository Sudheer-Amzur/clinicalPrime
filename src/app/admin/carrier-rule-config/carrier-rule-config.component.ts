import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormArray,FormGroup} from '@angular/forms';

@Component({
  selector: 'app-carrier-rule-config',
  templateUrl: './carrier-rule-config.component.html',
  styleUrls: ['./carrier-rule-config.component.css']
})
export class CarrierRuleConfigComponent implements OnInit {

 // constructor() { }
 CRCform:FormGroup;

  ngOnInit() {
    this.createForm();
  }

      cities: any[];
  
      selectedCity: string;
  
      cars: any[];
  
      selectedCar: string;
  
      selectedCar2: string = 'BMW';
  
      constructor(private fb:FormBuilder) {
          this.cities = [
              {name: 'New York', code: 'NY'},
              {name: 'Rome', code: 'RM'},
              {name: 'London', code: 'LDN'},
              {name: 'Istanbul', code: 'IST'},
              {name: 'Paris', code: 'PRS'}
          ];
  
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
      }
      createForm() {
        this.CRCform = this.fb.group({
          mcc: 'BMW',  
          carrierGp:'',
          commonCG:''
        });
      }

}
