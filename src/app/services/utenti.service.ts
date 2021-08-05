import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {
  private urlUsersAPI = 'https://jsonplaceholder.typicode.com/users/';

  constructor(private http: HttpClient) { }

  getUtenti() {
    return this.http.get(this.urlUsersAPI);
  }

  getUtenteid(id: number) {
    return this.http.get(this.urlUsersAPI+id);
  }

  deleteUser(userId: number) {
    return this.http.delete(this.urlUsersAPI+userId);
  }

  updateUtente(user: any) {
    return this.http.put(this.urlUsersAPI+user.id, user);
  }

  creaUtente(user: any) {
    return this.http.post(this.urlUsersAPI, user);
  }
}
