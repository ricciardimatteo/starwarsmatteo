import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtentiService } from '../services/utenti.service';

@Component({
  selector: 'app-nuovo-utente',
  templateUrl: './nuovo-utente.component.html',
  styleUrls: ['./nuovo-utente.component.css']
})
export class NuovoUtenteComponent implements OnInit {
  Utente: any = {name: '', username: '', email: ''};
  
  constructor(
    private utenteService: UtentiService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  addNewFan() {
    this.utenteService.creaUtente(this.Utente).subscribe(response => {
      alert('Oggetto Aggiunto!!! ' + JSON.stringify(response))
    })
    this.router.navigate(['fan']);

  }
}

