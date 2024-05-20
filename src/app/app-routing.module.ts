import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { authGuard } from './services/guard/auth.guard';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent, canActivate: [authGuard]},
  {path: 'home', component: HelloworldComponent, canActivate: [authGuard]},
  {path: 'mainmenu', component: MainmenuComponent, canActivate: [authGuard]},
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {path: ':id', component: ProfileDetailComponent, canActivate: [authGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
