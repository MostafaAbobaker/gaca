import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { CatalogComponent } from './catalog/catalog.component';
import { HeaderCatalogComponent } from './header-catalog/header-catalog.component';
import { InformationComponent } from './information/information.component';
import { CalendarModule } from 'primeng/calendar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputMaskModule } from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';


// import {NgxIntlTelInputModule} from './intl-tel-input/'

@NgModule({
  declarations: [
    CatalogComponent,
    HeaderCatalogComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    CalendarModule,
    FormsModule,
    InputMaskModule,
    ReactiveFormsModule,
    DropdownModule,
    NgxIntlTelInputModule,

  ]
})
export class CatalogModule { }
