import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newAuthor:any
  error:string;
  constructor(private _http:HttpService, private router:Router) { 

  }

  ngOnInit() {
    this.newAuthor={
      name:''
    }
    this.error=''
  }

  addAuthor(){
    let addAuthor=this._http.addAuthor(this.newAuthor);
    addAuthor.subscribe((data:any)=>{
      if(data.error){
        this.error = data.error.errors.name.message
      }
      else{
        this.router.navigate(['/home']);
      }
      
    })
  }

}
