import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
@Component({
  selector: 'app-displayresults',
  templateUrl: './displayresults.component.html',
  styleUrls: ['./displayresults.component.css']
})
export class DisplayresultsComponent implements OnInit {
resultscompleted : Boolean;
  constructor(private userService:UserService) { }
  GetResults()
  {
    this.userService.GetResults()
    .subscribe();
  }
  GetProgression()
  {
    let code=setInterval(()=>{
      this.userService.GetResultsSavingProgress()
      .subscribe(resultsprogression=>{
        this.resultscompleted=resultsprogression;
      })
      if (this.resultscompleted==true)
      {
        clearInterval(code);
      }
    },1000*180)
  }
  ngOnInit() {
    this.GetResults();
    this.GetProgression();
  }

}
