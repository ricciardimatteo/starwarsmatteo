import { Component, OnInit } from '@angular/core';
import { VeicoliService } from '../services/veicoli.service';

@Component({
  selector: 'app-veicoli',
  templateUrl: './veicoli.component.html',
  styleUrls: ['./veicoli.component.css']
})
export class VeicoliComponent implements OnInit {

  veicoli:any;
  constructor(private VeicoliService: VeicoliService) { }

  ngOnInit(): void {
    this.VeicoliService.getAPIv()
    .subscribe(data=>this.veicoli=data)
  }

}