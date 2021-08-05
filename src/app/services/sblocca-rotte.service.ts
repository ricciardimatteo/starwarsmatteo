import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SbloccaRotteService {

  private login = false;
  constructor() { }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.login;
  }

  loginApp(email: string, password: string) {
    
      this.login = true;
    } 
    }
  
  

