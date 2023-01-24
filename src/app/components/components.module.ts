import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { ComponentesComponent } from './componentes/componentes.component';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';

import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    MenuComponent,
    ComponentesComponent,
    TableComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule,
    MatCheckboxModule,
    MatTableModule
  ],

  exports: [
    MenuComponent,
    ComponentesComponent,
    TableComponent,
    HomeComponent,
    MatMenuModule,
    MatCheckboxModule,
    MatTableModule
  ]
})
export class ComponentsModule { }
