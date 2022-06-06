import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { forgotpasswordComponent } from './forgotpassword/forgot.component';
import { LoginComponent } from './login/login.component';
import { registerComponent } from './register/register.component';

const routes: Routes = [

  { path: 'auth', component: AuthComponent, children:[
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: registerComponent }

  ] },
  { path: 'forgot-password', component: forgotpasswordComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
