import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiplomaticAviationComponent } from './diplomaticAviation/diplomatic-aviation.component';

const routes: Routes = [{ path: '', component: DiplomaticAviationComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiplomaticAviationRoutingModule { }
