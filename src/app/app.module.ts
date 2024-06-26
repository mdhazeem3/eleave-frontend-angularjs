import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloworldComponent } from './helloworld/helloworld.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { MainmenuComponent } from './mainmenu/mainmenu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule, MAT_RADIO_DEFAULT_OPTIONS} from '@angular/material/radio';
import { ProfileComponent } from './profile/profile.component';
import { ProfileDetailComponent } from './profile-detail/profile-detail.component';
import { UserListComponent } from './user-list/user-list.component';
import { AddLeaveComponent } from './add-leave/add-leave.component';
import { SearchPipe } from "./services/search.pipe";
import { ApplyleaveComponent } from './applyleave/applyleave.component';
import { AdminLeaveComponent } from './admin-leave/admin-leave.component';
import { CustomDatePipe } from './services/date-format.pipe';
import { DialogComponent } from './dialog/dialog.component';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogRef, MatDialogTitle } from '@angular/material/dialog';

@NgModule({
    declarations: [
        AppComponent,
        HelloworldComponent,
        LoginComponent,
        SignupComponent,
        MainmenuComponent,
        ProfileComponent,
        ProfileDetailComponent,
        UserListComponent,
        AddLeaveComponent,
        ApplyleaveComponent,
        AdminLeaveComponent,
        DialogComponent
    ],
    providers: [
        provideAnimationsAsync(),
        { provide: MAT_RADIO_DEFAULT_OPTIONS,
            useValue: { color: 'primary' }, }
    ],
    bootstrap: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule,
        MatIconModule,
        MatSidenavModule,
        MatToolbarModule,
        MatSelectModule,
        MatRadioModule,
        FormsModule,
        SearchPipe,
        CustomDatePipe,
        MatButtonModule,
        MatDialogActions,
        MatDialogClose,
        MatDialogTitle,
        MatDialogContent
    ]
})
export class AppModule { }
