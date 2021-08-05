import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SbloccaRotteService } from '../services/sblocca-rotte.service';

@Component({
  selector: 'app-areafan',
  templateUrl: './areafan.component.html',
  styleUrls: ['./areafan.component.css']
})
export class AreafanComponent implements OnInit {

  email = '';
  password = '';

  constructor(
    private sbloccaRotte:SbloccaRotteService,
    private router: Router,
    ) { }

  ngOnInit(): void {
  }

  loginUser() {
    //alert(this.email + ' ' + this.password);
    this.sbloccaRotte.loginApp(this.email, this.password);
    this.router.navigate(['/fan'])
  }

}
