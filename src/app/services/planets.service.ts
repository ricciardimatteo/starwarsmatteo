import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private urlAPIpl  = "https://www.swapi.tech/api/planets/";

  constructor(private http: HttpClient) { }
  GetAPI() {
    return this.http.get(this.urlAPIpl);
  }
  
  
  
  }
