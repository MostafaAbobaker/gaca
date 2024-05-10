import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralAviationComponent } from './generalAviation/general-aviation.component';

const routes: Routes = [{ path: '', component: GeneralAviationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralAviationRoutingModule { }
