import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  id: any;
  loginForm: FormGroup = new FormGroup({});
  public showpassword: boolean = false;
  constructor(
    public formBuilder: FormBuilder,
    public router: Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      phone: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.loginForm = new FormGroup({
      phone: new FormControl(''),
      password: new FormControl('')
    });

    this.display();
  }

  display() {
    this.id = localStorage.getItem("id");
  }

  onSubmit() {
    localStorage.setItem("user", JSON.stringify(this.loginForm.value));
  }

}
