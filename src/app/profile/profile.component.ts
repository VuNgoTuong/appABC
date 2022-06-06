import { Component, OnInit } from '@angular/core';
import { DarkService } from './dark-mode.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public name= 'Profile Vu';
  checkdark:boolean = false;
  constructor(private darkTheme:DarkService) { }

  ngOnInit(): void {
  }
  toggleClick(){
    this.darkTheme.toggeldark();
    this.checkdark = this.darkTheme.check_dark;
  }

}
