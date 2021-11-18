import { Component } from '@angular/core';

@Component({
  selector: 'app-sort-out',
  templateUrl: './sort-out.component.html',
  styles: [
  ]
})
export class SortOutComponent {

  uppercase: boolean = true;

  changeUppercase() {
   return (this.uppercase) ? this.uppercase=false : this.uppercase=true;
  }

}
