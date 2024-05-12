import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneKeyService {

  constructor(private _http:HttpClient) { }

  getPhoneKey():Observable<any>{
    return this._http.get('https://api.apilayer.com/number_verification/countries' , {
      headers:{
        "apikey": "6ccwFGOeiyWCW2KH9Cqx3Tcm9zxUA9Fv"
      }
    })
  }
}
