import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.component';
import { AppComponent } from './app.component';
import { AuthModule } from './auth';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthService } from './services/auth.service';
import { TransactionModule } from './transaction';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponent } from './dashboard/calendar/calendar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ProfileComponent } from './profile/profile.component';
import { ProfileModule } from './profile';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalendarComponent
  ],
  imports: [
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    TransactionModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ProfileModule
  ],
  providers: [AuthService],
  entryComponents: [CalendarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
