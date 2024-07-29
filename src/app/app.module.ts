import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TodolistComponent } from './Components/Todolist/PEAR-Todolist.component';
import { MenuAgregarComponent } from './Components/MenuAgregar/PEAR-MenuAgregar.component';
import { ListaComponent } from './Components/Lista/PEAR-List.component';
import { EditarComponent } from './Components/Editar/editar.component';

@NgModule({
  declarations: [
    AppComponent, TodolistComponent, MenuAgregarComponent, ListaComponent, EditarComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
