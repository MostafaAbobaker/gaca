import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralAviationRoutingModule } from './general-aviation-routing.module';
import { GeneralAviationComponent } from './generalAviation/general-aviation.component';


@NgModule({
  declarations: [
    GeneralAviationComponent
  ],
  imports: [
    CommonModule,
    GeneralAviationRoutingModule
  ]
})
export class GeneralAviationModule { }
