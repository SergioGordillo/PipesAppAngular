import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { NumbersComponent } from './pages/numbers/numbers.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { BasicsComponent } from './pages/basics/basics.component';
import { SortOutComponent } from './pages/sort-out/sort-out.component';
import { CustomizedUppercase } from './pipes/customized-uppercase.pipe';




@NgModule({
  declarations: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortOutComponent,
    CustomizedUppercase
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    NumbersComponent,
    NoCommonsComponent,
    BasicsComponent,
    SortOutComponent
  ]
})
export class SalesModule { }
