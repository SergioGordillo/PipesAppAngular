import { Component } from '@angular/core';

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
 

}
