import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SegundoComponent } from './segundo/segundo.component';
import { TerceroComponent } from './tercero/tercero.component';
import { EnmedioComponent } from './enmedio/enmedio.component';
import { CuartoComponent } from './cuarto/cuarto.component';
import { QuintoComponent } from './quinto/quinto.component';
import { SextoComponent } from './sexto/sexto.component';
import { FooterComponent } from './footer/footer.component';
import { Footer2Component } from './footer2/footer2.component';
import { UltimoComponent } from './ultimo/ultimo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SegundoComponent,
    TerceroComponent,
    EnmedioComponent,
    CuartoComponent,
    QuintoComponent,
    SextoComponent,
    FooterComponent,
    Footer2Component,
    UltimoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
