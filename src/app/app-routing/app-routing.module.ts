import { NgModule, SystemJsNgModuleLoader, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule, Router} from '@angular/router';
import {HomeComponent} from '../home/home.component';
import {DisplayresultsComponent} from '../savingresults/displayresults.component';
import {FinalresultsComponent} from '../finalresults/finalresults.component';
import {StartbalayagesComponent} from '../startbalayages/startbalayages.component';
const routes : Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path :'home',component:HomeComponent},
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
