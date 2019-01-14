import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  author:object
  editAuthor:any
  error:string
  constructor(private _http:HttpService, private _route:ActivatedRoute,private router:Router) {

  }

  ngOnInit() {
    this.getAuthor();
    this.editAuthor={
      name:""
    }
  }

  getAuthor(){
    this._route.params.subscribe((params)=>{
      let find = this._http.oneAuthor(params['id']);
      find.subscribe(data=>{
        this.author=data;
        console.log(data);
      });
    });
  }

  editName(){
    this._route.params.subscribe((params)=>{
      let update = this._http.updateAuthor(params['id'],this.editAuthor);
      update.subscribe((data:any)=>{
        if(data.error){
          this.error = data.error.errors.name.message
        }
        else{
          this.router.navigate(['/home']);
        }
      })
    })

  }

}
