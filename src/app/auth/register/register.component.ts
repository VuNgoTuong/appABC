import { Component, OnInit } from '@angular/core';
import { FormGroup ,FormBuilder, Validators  } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class registerComponent implements OnInit {
  registerForm : FormGroup = new FormGroup({}) ;
  public showpassword: boolean = false;
  constructor( public formBuilder: FormBuilder,  public router: Router ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
        phone: ['',Validators.required],
        password: ['',Validators.required]
    });
  }

}
