import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', redirectTo:'catalog',pathMatch:'full'},
  {
    path: 'catalog',
    loadChildren: () =>
      import('./catalog/catalog.module').then((m) => m.CatalogModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: 'requests',
    loadChildren: () =>
      import('./requests/requests.module').then((m) => m.RequestsModule),
  },

  {
    path: 'generalAviation',
    loadChildren: () =>
      import('./general-aviation/general-aviation.module').then(
        (m) => m.GeneralAviationModule
      ),
  },
  {
    path: 'commercialAviation',
    loadChildren: () =>
      import('./commercial-aviation/commercial-aviation.module').then(
        (m) => m.CommercialAviationModule
      ),
  },
  {
    path: 'diplomaticAviation',
    loadChildren: () =>
      import('./diplomatic-aviation/diplomatic-aviation.module').then(
        (m) => m.DiplomaticAviationModule
      ),
  },
  {
    path: 'commercialAviation',
    loadChildren: () =>
      import('./commercial-aviation/commercial-aviation.module').then(
        (m) => m.CommercialAviationModule
      ),
  },

  {path:'**',redirectTo:'catalog',pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
