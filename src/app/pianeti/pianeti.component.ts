import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../services/planets.service';

@Component({
  selector: 'app-pianeti',
  templateUrl: './pianeti.component.html',
  styleUrls: ['./pianeti.component.css']
})
export class PianetiComponent implements OnInit {
  
  planets:any
  

  constructor(
      private planetService:PlanetsService,
      ) { }

  ngOnInit(): void {
    this.planetService.GetAPI()
    .subscribe (resp => this.planets = resp);
    
      }
  }




