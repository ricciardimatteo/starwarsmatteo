import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material-module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NavbarStarwarsComponent } from './navbar-starwars/navbar-starwars.component';
import { PianetiComponent } from './pianeti/pianeti.component';
import { VeicoliComponent } from './veicoli/veicoli.component';
import { PeopleComponent } from './people/people.component';
import { AreafanComponent } from './areafan/areafan.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarUsersComponent } from './navbar-users/navbar-users.component';
import { TabellaUtentiComponent } from './tabella-utenti/tabella-utenti.component';
import { NuovoUtenteComponent } from './nuovo-utente/nuovo-utente.component';
import { ModificaUtenteComponent } from './modifica-utente/modifica-utente.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarStarwarsComponent,
    PianetiComponent,
    VeicoliComponent,
    PeopleComponent,
    AreafanComponent,
    FooterComponent,
    HomeComponent,
    NavbarUsersComponent,
    TabellaUtentiComponent,
    NuovoUtenteComponent,
    ModificaUtenteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
