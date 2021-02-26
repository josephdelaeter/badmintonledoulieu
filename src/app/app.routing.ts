import { NgModule } from '@angular/core';
import { RouterModule ,Routes } from '@angular/router';
import { AuthGuard } from 'src/shared/auth.guard';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { InfosComponent } from './infos/infos.component';

import { MatchComponent } from './match/match.component';
import { PlayerComponent } from './player/player.component';
import { RankingComponent } from './ranking/ranking.component';
import { ResultComponent } from './result/result.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'player', component: PlayerComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'result', component: ResultComponent },
  { path: 'ranking', component: RankingComponent },
  { path: 'match', component: MatchComponent },
  { path: 'infos', component: InfosComponent },
  { path: 'log-in', component: SigninComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'user-profile/:id', component: UserProfileComponent, canActivate: [AuthGuard] }
]

// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
