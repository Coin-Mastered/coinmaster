import { RegisterComponent } from './components/register/register.component';
import { LeaderboardComponent } from './components/leaderboard/leaderboard.component';
import { LoginComponent } from './components/login/login.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { MainComponent } from './components/main/main.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '', component: MainComponent},
  {path: 'home', component: MainComponent},
  {path: 'wallet', component: WalletComponent},
  {path: 'login', component: LoginComponent},
  {path: 'leaderboard', component: LeaderboardComponent},
  {path: 'register', component: RegisterComponent},
  {path: '**', component: MainComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
