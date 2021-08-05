import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VeicoliService {

  private urlAPIVei = "https://www.swapi.tech/api/starships/"
 

getAPIv() {
  return this.http.get(this.urlAPIVei);
}



constructor(private http: HttpClient) { }
}