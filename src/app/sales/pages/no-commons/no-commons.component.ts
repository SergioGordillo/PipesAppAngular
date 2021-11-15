import { Component } from '@angular/core';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent {

  name : string = "Sergio";
  gender: string = "masculino";

  invitationMap={
    "masculino": "invitarlo",
    "femenino": "invitarla"
  }
 

}
