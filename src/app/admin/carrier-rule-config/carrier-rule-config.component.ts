import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormArray,FormGroup} from '@angular/forms';
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

  ngOnInit() {
    this.createForm();
  }

      cities: any[];
  
      selectedCity: string;
  
      cars: any[];
  
      selectedCar: string;
      selectedCars3:any[];
      selectedCar2: string = 'BMW';
      selectedCities:any[];
      carData:any[];
      gridData:ICarData[];
  
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
                    {brand: "VW", year: 2012, color: "Orange", vin: "dsad231ff",cityData:[]},
                    {brand: "Audi", year: 2011, color: "Black", vin: "gwregre345",cityData:[]},
                    {brand: "Renault", year: 2005, color: "Gray", vin: "h354htr",cityData:[]},
                    {brand: "BMW", year: 2003, color: "Blue", vin: "j6w54qgh",cityData:[]},
                    {brand: "Mercedes", year: 1995, color: "Orange", vin: "hrtwy34",cityData:[]},
                    {brand: "Volvo", year: 2005, color: "Black", vin: "jejtyj",cityData:[]},
                    {brand: "Honda", year: 2012, color: "Yellow", vin: "g43gr",cityData:[]},
                    {brand: "Jaguar",year: 2013, color: "Orange", vin: "greg34",cityData:[]},
                    {brand: "Ford",year: 2000, color: "Black", vin: "h54hw5",cityData:[]},
                    {brand: "Fiat", year: 2013, color: "Red", vin: "245t2s",cityData:[]}]


  
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
