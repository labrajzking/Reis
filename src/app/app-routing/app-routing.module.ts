import { NgModule, SystemJsNgModuleLoader, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule, Router} from '@angular/router';
import {LoginComponent} from '../login/login.component';
import {SignupComponent} from '../signup/signup.component';
import {HomeComponent} from '../home/home.component';
import {DisplayresultsComponent} from '../savingresults/displayresults.component';
import {FinalresultsComponent} from '../finalresults/finalresults.component';
import {StartbalayagesComponent} from '../startbalayages/startbalayages.component';
const routes : Routes = [
  {path:'',redirectTo:'/signup',pathMatch:'full'},
  {path :'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'displayresults',component:DisplayresultsComponent},
  {path:'startbalayages',component:StartbalayagesComponent},
  {path:'finalresults',component:FinalresultsComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
