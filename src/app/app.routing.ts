import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import {PersonaComponent} from './persona/persona.component';
import {CursoComponent} from './curso/curso.component';
import {HomeComponent} from './home/home.component';

const ROUTES: Routes = [
    { path: '', component : HomeComponent},
    { path: 'persona', component : PersonaComponent},
    { path: 'curso', component : CursoComponent},
    { path: '**', component : HomeComponent}
   
];

@NgModule({
imports: [RouterModule.forRoot(ROUTES)],
exports: [RouterModule]
})
export class AppRoutingModule {}