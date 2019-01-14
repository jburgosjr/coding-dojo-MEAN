import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
 
  constructor(private _http:HttpClient) { }

  getTrivaQuestion(){
    return this._http.get('https://opentdb.com/api.php?amount=1&category=18&type=boolean');
  }


}
