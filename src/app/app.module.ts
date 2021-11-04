import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './views/users/users.component';
import {HttpClientModule} from "@angular/common/http";
import { SingleUserComponent } from './views/single-user/single-user.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './views/login/login.component';
import { ErrorComponent } from './views/error/error.component';
import {FormsModule} from "@angular/forms";
import { UserFormComponent } from './user-form/user-form.component';
import { ErrorsFormComponent } from './errors-form/errors-form.component';
import { AddUserComponent } from './views/add-user/add-user.component';
import { EditUserComponent } from './views/edit-user/edit-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    SingleUserComponent,
    HeaderComponent,
    LoginComponent,
    ErrorComponent,
    UserFormComponent,
    ErrorsFormComponent,
    AddUserComponent,
    EditUserComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
