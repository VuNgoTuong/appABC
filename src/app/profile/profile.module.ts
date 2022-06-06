import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditProfileComponent } from './editprofile.component';
import { ProfileRoutingModule } from './profile-routing.component';
import { ProfileComponent } from './profile.component';


@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ProfileRoutingModule
  ],
  declarations: [
   ProfileComponent,
   EditProfileComponent
  ]
})
export class ProfileModule { }
