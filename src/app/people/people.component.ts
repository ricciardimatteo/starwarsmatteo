import { Component, OnInit } from '@angular/core';
import { PeopleService } from '../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  people:any
  

  constructor(
      private peopleService:PeopleService,
      ) { }

  ngOnInit(): void {
    this.peopleService.getAPIp()
    .subscribe (data=> this.people = data);
    
      }
  }
