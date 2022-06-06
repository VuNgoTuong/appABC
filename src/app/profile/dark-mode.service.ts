import { Injectable } from '@angular/core';

@Injectable({providedIn:'root'})
export class DarkService {
    check_dark:boolean =false;
    constructor() {}
    toggeldark(){
        this.check_dark = document.body.classList.toggle('dark-theme');
    }
}
