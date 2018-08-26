import { SummaryPipe } from './summary.pipe';
import { CoursesComponent } from './courses.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule }        from './app-routing.module';
import { CourseComponent } from './course/course.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';

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
  PlayerProfileComponent
  ],
  imports: [
    BrowserModule,
	AppRoutingModule,
    FormsModule
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
