import { Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import { Subscription} from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  BalayagesStarted : Boolean;
  BalayagesProgression : Number;
  subscription: Subscription;
  completed : Boolean=false;
  resultscompleted : Boolean=false;
  errMess : String ;
  constructor(private userService : UserService) { }
  
  StartBalayages()
  {
    this.BalayagesStarted=true;
    this.userService.StartBalayages()
    .subscribe();
  }
  GetBalayagesProgression ()
  { 
    if (this.BalayagesStarted )
    { 
   let code=setInterval(()=>{
       this.userService.GetBalayagesProgress()
      .subscribe(progression=>{console.log("LAUNCHED"); 
        this.BalayagesProgression=progression
      console.log(this.BalayagesProgression)
      if (this.BalayagesProgression==100.0)
    {
      this.completed=true;
      console.log(this.completed);
      clearInterval(code);
    }
  },errmess=>this.errMess=<any>errmess); 
    },1000*20)
    setTimeout(() => {
  if (this.completed==true)
  {
let code=setInterval(()=>{
  this.userService.GetResultsSavingProgress()
  .subscribe(resultsprogression=>{
    this.resultscompleted=resultsprogression;},
    errmess=>this.errMess=<any>errmess)
  if (this.resultscompleted==true)
  {
    clearInterval(code);
  }
},1000*20)
  }
}, 1000*30);
  }
  }
  
  ngOnInit() {
  }

}
