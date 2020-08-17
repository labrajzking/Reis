import { Component, OnInit,ViewChild } from '@angular/core';
import {UserService} from '../services/user.service';
import {Results} from '../models/Results';
import {Location} from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Outcome} from '../models/Outcome';
@Component({
  selector: 'app-finalresults',
  templateUrl: './finalresults.component.html',
  styleUrls: ['./finalresults.component.css']
})
export class FinalresultsComponent implements OnInit {
  Outcome : Outcome;
  errMess : String;
  displayedColumns: string[] = ['client_code','whole_name','person_id','score'];
  ResultsList1 : Results[];
  ResultsList2 : Results[];
  constructor(private userService:UserService,
    private location:Location) { }
  GetFinalResults ()
  {
    this.userService.GetFinalResults()
    .subscribe(Outcome=>{this.Outcome=Outcome
      this.ResultsList1=this.Outcome.resultsList1;
      this.ResultsList2=this.Outcome.resultsList2;
      console.log(this.ResultsList2);
    },errmess=>{this.errMess=<any>errmess;
    console.log(this.errMess);})
  }
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ngOnInit() {
    this.GetFinalResults();
  }
  GetBack()
  {
    this.location.back();
  }
}
