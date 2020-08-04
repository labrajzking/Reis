import { Injectable } from '@angular/core';
import {throwError} from 'rxjs';
import {HttpErrorResponse} from '@angular/common/http';
import { Http } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ProcessHttpmsgService {

  constructor() { }
  public HandelError(error : HttpErrorResponse | any )
  {
let errMsg : String;
if (error.error instanceof ErrorEvent)
{
errMsg=error.error.message;
}
else
 {
   errMsg=`${error.status} - ${error.statusText || ''}${error.error}`
 }
 return throwError(errMsg);
  }
  
}
