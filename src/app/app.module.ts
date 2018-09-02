import { SummaryPipe } from './summary.pipe';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { DashboardPlayerComponent } from './dashboard-player/dashboard-player.component';
import { ThankYouComponent } from './thank-you/thank-you.component';
var firebaseconfig = {
  apiKey: "AIzaSyCOWozwnAuIjH7skp35_bbKFLCDiqjLBL8",
  authDomain: "angularworkshop-d9f6b.firebaseapp.com",
  databaseURL: "https://angularworkshop-d9f6b.firebaseio.com",
  projectId: "angularworkshop-d9f6b",
  storageBucket: "angularworkshop-d9f6b.appspot.com",
  messagingSenderId: "1042103139904"
};
@NgModule({
  declarations: [
    AppComponent,
	//CoursesComponent,
   // CourseComponent,
   // SummaryPipe,
    LoginComponent,
	HomeComponent,
	RegisterComponent,
	AboutComponent,
	ExpertiseComponent,
  PlayerProfileComponent,
  DashboardPlayerComponent,
  ThankYouComponent
  ],
  imports: [
    BrowserModule,
  AppRoutingModule,
  ReactiveFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireDatabaseModule, // for database
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  // Diagnostic only: inspect router configuration
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
