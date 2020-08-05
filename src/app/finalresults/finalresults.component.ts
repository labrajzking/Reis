import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {Results} from '../models/Results';
@Component({
  selector: 'app-finalresults',
  templateUrl: './finalresults.component.html',
  styleUrls: ['./finalresults.component.css']
})
export class FinalresultsComponent implements OnInit {
  ResultsList : Results[];
  constructor(private userService:UserService) { }
  GetFinalResults ()
  {
    this.userService.GetFinalResults()
    .subscribe(list=>this.ResultsList=list)
    console.log(this.ResultsList);
  }
  ngOnInit() {
    this.GetFinalResults();
  }
}
