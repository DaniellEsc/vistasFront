import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FichaAbordajeComponent } from './components/ficha-abordaje/ficha-abordaje.component';
import { FichaIdentificacionComponent } from './components/ficha-identificacion/ficha-identificacion.component';
import { FichaSocialComponent } from './components/ficha-social/ficha-social.component';

const routes: Routes = [

  {path: "", component:FichaAbordajeComponent},
  {path: "identificacion", component:FichaIdentificacionComponent},
  {path: "social", component: FichaSocialComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
