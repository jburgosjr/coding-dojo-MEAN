import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient){
  
  }
  initializeGame(){
    return this._http.get('/start');
  }

  saveGameAndSet(data:object){
    console.log(data)
    return this._http.put(`/addSave/`,data);
  }

  loadGame(id:string){
    return this._http.get(`/load/${id}`);
  }
}
