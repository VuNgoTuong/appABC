import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { registerComponent } from './register/register.component';
import { forgotpasswordComponent } from './forgotpassword/forgot.component';

@NgModule({
  imports: [
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AuthComponent,
    LoginComponent,
    registerComponent,
    forgotpasswordComponent
  ]
})
export class AuthModule { }
