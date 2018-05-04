import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { HttpClientModule } from '@angular/common/http';
import { SimpleTimer } from 'ng2-simple-timer';

import { AppComponent } from './app.component';
import { SuiveurComponent } from './suiveur/suiveur.component';
import { EviteurComponent } from './eviteur/eviteur.component';


@NgModule({
  declarations: [
    AppComponent,
    SuiveurComponent,
    EviteurComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule
  ],
   providers: [SimpleTimer],
  bootstrap: [AppComponent]
})
export class AppModule { }
