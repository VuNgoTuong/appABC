import { Injectable } from '@angular/core';
import { Auth } from './auth.model';

@Injectable()
export class AuthService {
  private auth_list: Auth[] = [];
  constructor() {
    if (!!localStorage.getItem('auths')) {
      this.load();
    }
  }

  add(data: Auth) {
    this.auth_list.push(data);
    this.save();
  }
  // getbyType(type:string){
  //   return this.auth_list.filter(x=>x.type===type);
  // }
  getlstService(){
    //return JSON.parse(localStorage.getItem('auths'));
  }
  save() {
    localStorage.setItem('transactions', JSON.stringify(this.auth_list));
  }
  load() {
    //this.auth_list = JSON.parse(localStorage.getItem('auths'));
  }
}
