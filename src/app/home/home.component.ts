import { Component, OnInit, OnDestroy} from '@angular/core';
import {UserService} from '../services/user.service';
import {BalayagesProgression} from '../models/BalayagesProgression';
import { Subscription} from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import {visibility,flyInOut,expand} from '../animations/animations';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  host : {
    '[@flyInOut]' :'true',
    'style' : 'display:block;'
      },
      animations : [
        flyInOut(),
        visibility(),
        expand()
      ]
})
export class HomeComponent implements OnInit,OnDestroy {
  /*subscription1: Subscription=new Subscription;
  subscription2: Subscription=new Subscription;*/
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
   /* this.subscription1= */this.userService.StartBalayages()
    .subscribe();
  }
  GetBalayagesProgression ()
  { 
    if (this.BalayagesStarted )
    { 
   let code=setInterval(()=>{
   /* this.subscription2=*/ this.userService.GetBalayagesProgress()
      .subscribe(balayagesprogression=>{
        this.BalayagesProgression=balayagesprogression;
        this.progression=this.BalayagesProgression.progression;
        this.forcedone=this.BalayagesProgression.forcedone;
      console.log(this.BalayagesProgression);
      if (this.BalayagesProgression.forcedone==true)
    {
      this.completed=true;
      clearInterval(code);
    }
  },errmess=>this.errMess=<any>errmess); 
    },1000*65)
    setTimeout(() => {
  if (this.completed==true)
  {
    console.log(this.completed);
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
ngOnDestroy()
{
  console.log("DESTROYING");
/*this.subscription1.unsubscribe();
this.subscription2.unsubscribe();*/
}
}
