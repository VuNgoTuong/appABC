import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'forgotpassword',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class forgotpasswordComponent implements OnInit {
  forgotpasswordForm : FormGroup = new FormGroup({}) ;
  constructor( public formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.forgotpasswordForm = this.formBuilder.group({
        phone: ['0354161612',Validators.required],
    });
  }

}
