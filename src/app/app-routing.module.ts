import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./views/login/login.component";
import {AuthGuard} from "./guards/auth/auth.guard";
import {UsersComponent} from "./views/users/users.component";
import {SingleUserComponent} from "./views/single-user/single-user.component";
import {ErrorComponent} from "./views/error/error.component";

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'users', canActivate:[AuthGuard], component:UsersComponent},
  {path:'users/:identifiant', component:SingleUserComponent},
  {path:'not-found', component:ErrorComponent},
  {path:'**', redirectTo:'not-found'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
