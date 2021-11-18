import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {

  // i18n Select
  name : string = "Sergio";
  gender: string = "masculino";

  invitationMap={
    "masculino": "invitarlo",
    "femenino": "invitarla"
  }

   // i18n Plural

   customers: string[] =["María", "Pedro", "Jorge", "Ramón"];

   customersMap={
     '=0': "No tenemos ningún cliente esperando.",
     '=1': "Tenemos un cliente esperando.",
     '=2': "Tenemos dos clientes esperando.",
     "other": "Tenemos # clientes esperando"
   }

   changeName(){
      this.name="María";
      this.gender="femenino";
   }

   deleteCustomer(){
    this.customers.pop();
   }

  //KeyValue Pipe

  person={
    name: " Sergio",
    age: " 30",
    country: " Spain"
  }
 
  // JSON Pipe

  footballteams=[
    {
      team: "Real Madrid",
      hasChampionsLeague: true
    },
    {
      team: "Juventus",
      hasChampionsLeague: true
    },
    {
      team: "Cádiz CF",
      hasChampionsLeague: false
    },
    { 
      team: "Arsenal",
      hasChampionsLeague: false
    }
  ];

  //Async Pipe

  myObservable=interval(1000);

  promiseValue=new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve("We have data of the promise")
    }, 3500);
  });

}
