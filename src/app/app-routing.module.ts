import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreafanComponent } from './areafan/areafan.component';
import { HomeComponent } from './home/home.component';
import { ModificaUtenteComponent } from './modifica-utente/modifica-utente.component';
import { NuovoUtenteComponent } from './nuovo-utente/nuovo-utente.component';
import { PeopleComponent } from './people/people.component';
import { PianetiComponent } from './pianeti/pianeti.component';
import { SbloccaRotteService } from './services/sblocca-rotte.service';
import { TabellaUtentiComponent } from './tabella-utenti/tabella-utenti.component';
import { VeicoliComponent } from './veicoli/veicoli.component';

const routes: Routes = [
  { path: '', redirectTo: '/index', pathMatch: 'full' },
  { path: 'index', component:HomeComponent},
  { path: 'pianeti', component:PianetiComponent},
  { path: 'veicoli', component:VeicoliComponent },
  { path: 'people', component:PeopleComponent},
  { path: 'fanlogin', component:AreafanComponent},
  { path: 'fan', component:TabellaUtentiComponent, canActivate:[SbloccaRotteService]},
  { path: 'fan/new', component:NuovoUtenteComponent},
  { path: 'fan/:id/edit', component:ModificaUtenteComponent, canActivate:[SbloccaRotteService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
