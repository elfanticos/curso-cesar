import { BrowserModule }                      from '@angular/platform-browser';
import { NgModule }                           from '@angular/core';
import {AppRoutingModule}                     from './app.routing';
import { FormsModule,ReactiveFormsModule }    from '@angular/forms';
import { HttpModule }                         from '@angular/http';

import { AppComponent }   from './app.component';
import {PersonaComponent} from './persona/persona.component';
import {CursoComponent}   from './curso/curso.component';
import {HomeComponent}    from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    CursoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
