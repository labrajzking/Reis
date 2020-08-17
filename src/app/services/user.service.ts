import { Injectable } from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseUrl } from '../models/BaseUrl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Http } from '@angular/http';
import {User} from '../models/User';
import { Token } from '@angular/compiler';
import { Results } from '../models/Results';
import { Outcome } from '../models/Outcome';
import { BalayagesProgression } from '../models/BalayagesProgression';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Token: string ;
  constructor(private http:HttpClient,
    private processHTTPMsgService:ProcessHttpmsgService) {   }
    submitLogin(user: User):Observable<any> {
      const httpOptions = {
        observe: 'response',
        headers: new HttpHeaders({
          'Content-type': 'application/json'
        })
      };
  this.http.post<any>(BaseUrl + 'login', user, {observe: 'response'})
  .subscribe(response=> {
    this.Token=response.body.Authorization;
    localStorage.setItem("token",this.Token);}
    );
  console.log(this.Token);
      return this.http.post(BaseUrl + 'login', user,{observe: 'response'})
        .pipe(catchError(this.processHTTPMsgService.HandelError));
    }
        submitSignup(user: User): Observable<User> {
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-type': 'application/json'
            })
          };
          return this.http.post<User>(BaseUrl + 'signup', user, httpOptions)
            .pipe(catchError(this.processHTTPMsgService.HandelError));
        }
        GetResults () 
        {
          const httpOptions = {
            headers: new HttpHeaders({
              'Authorization' : this.Token
            })
          };
         return this.http.get(BaseUrl+'GetResults',httpOptions)
          .pipe(catchError(this.processHTTPMsgService.HandelError));
        }
        StartBalayages ()
        {
          const httpOptions = {
            headers: new HttpHeaders({
              'Authorization' : this.Token
            })
          };

          return this.http.get(BaseUrl+'StartBalayages',httpOptions)
          .pipe(catchError(this.processHTTPMsgService.HandelError));
        }
        GetFinalResults ():Observable<Outcome>
        {
          const httpOptions = {
            headers: new HttpHeaders({
              'Authorization' : this.Token
            })
          };
          return this.http.get<Outcome>(BaseUrl+'GetFinalResults',httpOptions)
          .pipe(catchError(this.processHTTPMsgService.HandelError)); 
        }
        GetBalayagesProgress ():Observable<BalayagesProgression>
        {
          const httpOptions = {
            headers: new HttpHeaders({
              'Authorization' : this.Token
            })
          };
          return this.http.get<BalayagesProgression>(BaseUrl+'Balayagesprogression',httpOptions) 
          .pipe(catchError(this.processHTTPMsgService.HandelError));
        }
        GetResultsSavingProgress():Observable<Boolean>
        {
          const httpOptions = {
            headers: new HttpHeaders({
              'Authorization' : this.Token
            })
          };
          return this.http.get<Boolean>(BaseUrl+'ResultsSavingProgression',httpOptions) 
          .pipe(catchError(this.processHTTPMsgService.HandelError));
        }
    }


