import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private urlAPIpeople = "https://www.swapi.tech/api/people/"
 

  getAPIp() {
    return this.http.get(this.urlAPIpeople);
  }
  
  
  
  constructor(private http: HttpClient) { }
  }