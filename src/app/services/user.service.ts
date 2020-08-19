import { Injectable } from '@angular/core';
import { of, Observable, Subscription } from 'rxjs';
import { delay, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BaseUrl } from '../models/BaseUrl';
import { ProcessHttpmsgService } from './process-httpmsg.service';
import { Http } from '@angular/http';
import { Outcome } from '../models/Outcome';
import { BalayagesProgression } from '../models/BalayagesProgression';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http:HttpClient,
    private processHTTPMsgService:ProcessHttpmsgService) {   }
        GetResults () 
        {
  
         return this.http.get(BaseUrl+'GetResults')
          .pipe(catchError(this.processHTTPMsgService.HandelError));
        }
        StartBalayages ()
    {

          return this.http.get(BaseUrl+'StartBalayages')
          .pipe(catchError(this.processHTTPMsgService.HandelError));
        }
        GetFinalResults ():Observable<Outcome>
        {
         
          return this.http.get<Outcome>(BaseUrl+'GetFinalResults')
          .pipe(catchError(this.processHTTPMsgService.HandelError)); 
        }
        GetBalayagesProgress ():Observable<BalayagesProgression>
        {
         
          return this.http.get<BalayagesProgression>(BaseUrl+'Balayagesprogression') 
          .pipe(catchError(this.processHTTPMsgService.HandelError));
        }
        GetResultsSavingProgress():Observable<Boolean>
        {
         
          return this.http.get<Boolean>(BaseUrl+'ResultsSavingProgression') 
          .pipe(catchError(this.processHTTPMsgService.HandelError));
        }
    }


