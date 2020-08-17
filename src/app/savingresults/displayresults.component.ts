import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-displayresults',
  templateUrl: './displayresults.component.html',
  styleUrls: ['./displayresults.component.css']
})
export class DisplayresultsComponent implements OnInit {
resultscompleted : Boolean=false;
errMess : String;
  constructor(private userService:UserService,
    private location : Location) { }
  GetResults()
  {
    this.userService.GetResults()
    .subscribe(errmess=>{this.errMess=<any>errmess;
    console.log(this.errMess)});
  }
  /*GetProgression()
  {
    let code=setInterval(()=>{
      this.userService.GetResultsSavingProgress()
      .subscribe(resultsprogression=>{
        this.resultscompleted=resultsprogression;
      },errmess=>this.errMess=<any>errmess)
      if (this.resultscompleted==true)
      {
        clearInterval(code);
      }
    },1000*180)
  }*/
  ngOnInit() {
    this.GetResults();
    //this.GetProgression();
  }
GetBack()
{
  this.location.back();
}
}
