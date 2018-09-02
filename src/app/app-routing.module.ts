import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent }      from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ExpertiseComponent } from './expertise/expertise.component';
import { PlayerProfileComponent } from './player-profile/player-profile.component';
import { DashboardPlayerComponent } from './dashboard-player/dashboard-player.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'expertise', component: ExpertiseComponent },
  { path: 'player-profile', component: PlayerProfileComponent},
  { path: 'dashboard-player', component: DashboardPlayerComponent }
];
@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}