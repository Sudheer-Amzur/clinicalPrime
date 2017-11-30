import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormArray,FormGroup} from '@angular/forms';
import { element } from 'protractor';

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

      gridData:any[];
  
      constructor(private fb:FormBuilder) {
        this.cities = [{name: 'New York', code: 'NY'},
                       {name: 'Rome', code: 'RM'},
                       {name: 'London', code: 'LDN'},
                       {name: 'Istanbul', code: 'IST'},
                       {name: 'Paris', code: 'PRS'}];
        this.cars = [{label: 'Audi', value: 'Audi'},
                     {label: 'BMW', value: 'BMW'},
                     {label: 'Fiat', value: 'Fiat'},
                     {label: 'Ford', value: 'Ford'},
                     {label: 'Honda', value: 'Honda'},
                     {label: 'Jaguar', value: 'Jaguar'},
                     {label: 'Mercedes', value: 'Mercedes'},
                     {label: 'Renault', value: 'Renault'},
                     {label: 'VW', value: 'VW'}];
        this.gridData=[
                    {"brand": "VW", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
                    {"brand": "Audi", "year": 2011, "color": "Black", "vin": "gwregre345"},
                    {"brand": "Renault", "year": 2005, "color": "Gray", "vin": "h354htr"},
                    {"brand": "BMW", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
                    {"brand": "Mercedes", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
                    {"brand": "Volvo", "year": 2005, "color": "Black", "vin": "jejtyj"},
                    {"brand": "Honda", "year": 2012, "color": "Yellow", "vin": "g43gr"},
                    {"brand": "Jaguar", "year": 2013, "color": "Orange", "vin": "greg34"},
                    {"brand": "Ford", "year": 2000, "color": "Black", "vin": "h54hw5"},
                    {"brand": "Fiat", "year": 2013, "color": "Red", "vin": "245t2s"}]
  
      }
      createForm() {
        this.CRCform = this.fb.group({
          mcc: 'BMW',  
          carrierGp:'',
          commonCG:''
        });
      }
      onRowSelect(event) {
        console.log(event.data.vin);
         
    }

    onRowUnselect(event) {
        
    }

}
