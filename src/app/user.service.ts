import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {


  constructor(private _http: HttpClient) { }

  public getAll() {
    // return this._http.get('assets/user.json');
    return this._http.get('/api/user');
  }
}
