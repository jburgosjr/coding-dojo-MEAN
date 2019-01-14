import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    // this.getTasks();
  
 
  }
  getTasks(){
    // our http response is an Observable, store it in a variable
    // let tempObservable = this._http.get('/task');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    // tempObservable.subscribe(data => console.log("Got our tasks!", data));
    return this._http.get('/task')
 }
//  getTasksById(id:string){
//    return this._http.get(`/task/${id}`)
//  }
  newTask(task:object){
    return this._http.post('/task',task);
  }

  updateTask(task:any,id:string){
    return this._http.put(`/task/${id}`,task);
  }

  deleteTask(id:string){
    return this._http.delete(`/task/${id}`);
  }

}
