import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditProfileComponent } from './editprofile.component';
import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path:'',component:ProfileComponent
  },
  {
    path:'edit',component: EditProfileComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
