import { Component, OnInit, SystemJsNgModuleLoader } from '@angular/core';
import {UserService} from '../services/user.service';
import {Results} from '../models/Results';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ResultsList : String[];
  constructor(private userService : UserService) { }
  GetResults()
  {
    this.userService.GetResults()
    .subscribe();
  }
  StartBalayages()
  {
    this.userService.StartBalayages()
    .subscribe();
  }
GetFinalResults ()
{
  this.userService.GetFinalResults()
  .subscribe(list=>this.ResultsList=list)
  console.log(this.ResultsList);
}
  ngOnInit() {
  }

}
