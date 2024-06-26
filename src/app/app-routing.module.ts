import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { authGuard } from './services/guard/auth.guard';
import { UserListComponent } from './user-list/user-list.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { AdminLeaveComponent } from './admin-leave/admin-leave.component';

const routes: Routes = [
  {path:'', redirectTo:'/login', pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HelloworldComponent, canActivate: [authGuard]},
  {path: 'mainmenu',
  component: MainmenuComponent,
  canActivate: [authGuard],
  children:[
    {path: 'signup', component: SignupComponent},
    {path: 'profile', component: ProfileComponent, children:[{path: ':id', component: ProfileDetailComponent}]},
    {path: 'employeelist', component: UserListComponent},
    {path: 'edituser/:id', component: AddLeaveComponent},
    {path: 'leave-application', component: AdminLeaveComponent},
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
