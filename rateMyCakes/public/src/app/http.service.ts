import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 

  }
  getCakes(){
    return this._http.get('/allCakes');
  }

  makeCake(cake:any){
    return this._http.post('/addCake',cake);
  }

  getCakeById(id:string){
    return this._http.get(`/cakeBy/${id}`);
  }

  addReviewToCake(id:string,review:any){
    return this._http.post(`/addRating/${id}`,review)
  }
}
