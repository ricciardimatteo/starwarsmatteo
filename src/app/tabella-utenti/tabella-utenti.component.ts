import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtentiService } from '../services/utenti.service';

@Component({
  selector: 'app-tabella-utenti',
  templateUrl: './tabella-utenti.component.html',
  styleUrls: ['./tabella-utenti.component.css']
})
export class TabellaUtentiComponent implements OnInit {

  dataSource: any;

  constructor(
      private UtentiService: UtentiService,
      private router: Router
      ) { }

  ngOnInit(): void {
    this.UtentiService.getUtenti().subscribe(response => this.dataSource = response);
  }

  removeUsers(element: any) {
    this.UtentiService.deleteUser(element.id).subscribe(response => {
      //this.dataSource.splice(this.dataSource.indexOf(element), 1)
      this.dataSource = this.dataSource.filter((user: { id: any; }) => user.id !== element.id)
      }
    );
  }

  selectEditUsers(element: any) {
    this.router.navigate(['fan', element.id, 'edit']);
  }
}
