import { Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {BalayagesProgression} from '../models/BalayagesProgression';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  BalayagesStarted : Boolean;
  BalayagesProgression : BalayagesProgression;
  progression : Number;
  forcedone:Boolean;
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
      .subscribe(balayagesprogression=>{
        this.BalayagesProgression=balayagesprogression;
        this.progression=this.BalayagesProgression.progression;
        this.forcedone=this.BalayagesProgression.forcedone;
      console.log(this.BalayagesProgression)
      if (this.BalayagesProgression.progression==100.0)
    {
      this.completed=true;
      clearInterval(code);
    }
  },errmess=>this.errMess=<any>errmess); 
    },1000*65)
    setTimeout(() => {
  if (this.completed==true)
  {
    this.BalayagesStarted=false;
let code=setInterval(()=>{
  this.userService.GetResultsSavingProgress()
  .subscribe(resultsprogression=>{
    this.resultscompleted=resultsprogression;},
    errmess=>this.errMess=<any>errmess)
  if (this.resultscompleted==true)
  {
    clearInterval(code);
  }
},1000*60)
  }
}, 1000*65);
  }
  }
  
  ngOnInit() {
  }

}
