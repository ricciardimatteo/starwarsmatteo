import { UtentiService } from './../services/utenti.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifica-utente',
  templateUrl: './modifica-utente.component.html',
  styleUrls: ['./modifica-utente.component.css']
})
export class ModificaUtenteComponent implements OnInit {
  utente: any = {name: '', username: '', email: ''};
  constructor(
    private route: ActivatedRoute,
    private UtentiService:UtentiService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => 
      this.UtentiService.getUtenteid(params.id)
        .subscribe(response => this.utente = response))
  }

  editUser() {
    this.UtentiService.updateUtente(this.utente).subscribe(response => {
      alert('Oggetto Modificato!!! ' + JSON.stringify(response))
    })
    this.router.navigate(['fan']);
  }

}
