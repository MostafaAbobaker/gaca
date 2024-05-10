import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiplomaticAviationRoutingModule } from './diplomatic-aviation-routing.module';
import { DiplomaticAviationComponent } from './diplomaticAviation/diplomatic-aviation.component';


@NgModule({
  declarations: [
    DiplomaticAviationComponent
  ],
  imports: [
    CommonModule,
    DiplomaticAviationRoutingModule
  ]
})
export class DiplomaticAviationModule { }
