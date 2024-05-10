import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommercialAviationComponent } from './commercial-aviation/commercial-aviation.component';

const routes: Routes = [{ path: '', component: CommercialAviationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommercialAviationRoutingModule { }
