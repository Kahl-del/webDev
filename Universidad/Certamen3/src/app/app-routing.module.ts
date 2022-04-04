import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TablaClimaComponent} from './tabla-clima/tabla-clima.component'

const routes: Routes = [
  {path:"", component:TablaClimaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
