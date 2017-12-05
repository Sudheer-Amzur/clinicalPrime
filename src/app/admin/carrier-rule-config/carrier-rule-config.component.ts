import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormArray,FormGroup} from '@angular/forms';
import { MessageService } from '../../shared/message.service';
import { element } from 'protractor';
import {ICarData} from './car-list';


@Component({
  selector: 'app-carrier-rule-config',
  templateUrl: './carrier-rule-config.component.html',
  styleUrls: ['./carrier-rule-config.component.css']
})
export class CarrierRuleConfigComponent implements OnInit {

 // constructor() { }
 CRCform:FormGroup;

      cities: any[];
  
      selectedCity: string;
  
      cars: any[];
  
      selectedCar: string;
      selectedCars3:any[];
      selectedCar2: string = 'BMW';
      selectedCities:any[];
      carData:any[];
      gridData:ICarData[];
  
      constructor(private fb:FormBuilder,private message:MessageService) {
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
          this.message.changeMessage("Carrier-Rule-Config");
      }
      ngOnInit() {
        this.createForm();
        
      }
      createForm() {
        this.CRCform = this.fb.group({
          mcc: 'BMW',  
          carrierGp:'',
          commonCG:'',
          selectedCities:this.fb.array([]),
          carData:this.fb.array([])
        });
        
      }
      onRowSelect(event) {  
        debugger;     
        console.log(event.data.vin);
        this.CRCform.value.carData = this.selectedCars3;         
    }

    onChangeofCities(event,car:any) {
      debugger;     
      let index = this.findSelectedCarIndex(car);  
      this.CRCform.value.carData[index].cityData = []; 
      this.CRCform.value.carData[index].cityData=event.value.map(item => item.code);   
  }

  findSelectedCarIndex(car:any): number {
    return this.CRCform.value.carData.findIndex(item => item.vin === car.vin)
}

    onRowUnselect(event) {
      console.log(event.data.vin);
    }


}
