import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Header } from 'primeng/api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private _http: HttpClient) { }

  getCountry():Observable <any>{
    /* return this._http.get('https://api.countrystatecity.in/v1/countries',
      {
        headers : { "X-CSCAPI-KEY": "NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZ1g4RTk1MlJ1aA=="}
      }
    ); */
    return this._http.get('https://countriesnow.space/api/v0.1/countries/currency' );
  }
}
