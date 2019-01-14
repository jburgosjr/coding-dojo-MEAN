import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors=[]
  constructor(private _http:HttpService) { 

  }

  ngOnInit() {
    this.allAuthors();
  }

  allAuthors(){
    let list = this._http.getAllAuthors();
    list.subscribe(data=>{
      this.authors=data['authors'];
    });
  }
  authorDelete(id:string){
    let del = this._http.deleteAuthor(id);
    del.subscribe(data=>{
      this.allAuthors();
    })
  }

}
