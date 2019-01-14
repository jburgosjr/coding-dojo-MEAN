import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  newTask:any;
  editTask:any;
  tasks=[];
  id:string;
  constructor(private _httpService:HttpService){

  }
  ngOnInit(){
    console.log(this.getTasksFromService());
    
    this.newTask={
      title:"",
      description:""
    
    }
    this.editTask={
      title:"",
      description:""
    }

    
    

  }
  getTasksFromService(){
    let observable = this._httpService.getTasks();
    observable.subscribe(data=>{
      console.log("got our data", data)
      this.tasks = data['Tasks'];
    })
  }

  addTask(){
    let observable = this._httpService.newTask(this.newTask);
    observable.subscribe(data=>{
      this.getTasksFromService();
    });
  }

  editFields(task:any){
   this.editTask.title= task.title;
   this.editTask.description = task.description;
   this.id = task._id;

  }

  updateFields(){
    console.log(this.editTask)
    let observable = this._httpService.updateTask(this.editTask,this.id);
    observable.subscribe(data=>{
      this.getTasksFromService();
    });
  }

  deleteTask(task){
    let observable = this._httpService.deleteTask(task._id);
    observable.subscribe(data=>{
      this.getTasksFromService();
    });
  }
}
