import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth',
      loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'dash-board', component: DashboardComponent },
  { path: 'transaction',
      loadChildren: () => import('./transaction/transaction.module').then(m => m.TransactionModule) },
  { path: 'profile',
      loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
