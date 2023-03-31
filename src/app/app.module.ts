import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FichaSocialComponent } from './components/ficha-social/ficha-social.component';
import { FichaAbordajeComponent } from './components/ficha-abordaje/ficha-abordaje.component';
import { FichaIdentificacionComponent } from './components/ficha-identificacion/ficha-identificacion.component';

@NgModule({
  declarations: [
    AppComponent,
    FichaSocialComponent,
    FichaAbordajeComponent,
    FichaIdentificacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
