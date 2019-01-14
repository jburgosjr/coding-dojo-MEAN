import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http:HttpClient) { 

  }

  getAllAuthors(){
    return this._http.get('/allAuthors');
  }

  addAuthor(info:object){
    return this._http.post('/newAuthor',info);

  }

  oneAuthor(id:string){
    return this._http.get(`/author/${id}`);
  }

  updateAuthor(id:string,info:object){
    return this._http.put(`/editAuthor/${id}`,info);
  }

  deleteAuthor(id:string){
    return this._http.delete(`/annihilate/${id}`);
  }
}
