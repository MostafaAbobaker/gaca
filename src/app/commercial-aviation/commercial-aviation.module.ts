import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommercialAviationRoutingModule } from './commercial-aviation-routing.module';
import { CommercialAviationComponent } from './commercial-aviation/commercial-aviation.component';


@NgModule({
  declarations: [
    CommercialAviationComponent
  ],
  imports: [
    CommonModule,
    CommercialAviationRoutingModule
  ]
})
export class CommercialAviationModule { }
