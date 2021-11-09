import { Component } from '@angular/core';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.component.html',
  styles: [
  ]
})
export class BasicsComponent {

  name: string = "Sergio"
  nameUpper: string ="SERGIO";
  nameLower: string ="sergio";

  date: Date = new Date(); //today's day
  

}
