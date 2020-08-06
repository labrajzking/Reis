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
  displayedColumns: string[] = ['client_code','person_id'];
  ResultsList : Results[];
  constructor(private userService:UserService,
    private location:Location) { }
  GetFinalResults ()
  {
    this.userService.GetFinalResults()
    .subscribe(Outcome=>{this.Outcome=Outcome
      this.ResultsList=this.Outcome.resultsList;
      console.log(this.Outcome);
    })
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
