import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cakeList=[];
  newCake:any;
  newReview:any
  imgShow;
  commentTrigger;
  constructor(private _httpService: HttpService){

  }
  ngOnInit(){
    this.getAllCakes();
    this.newCake={
      name:'',
      image:''
    }

    this.newReview={
      rating:0,
      review:""
    }
  }
  
  getAllCakes(){
    let dataBack = this._httpService.getCakes();
    dataBack.subscribe(data=>{
      this.cakeList=data['allCakes'];
      console.log(this.cakeList)
    });
  }

  addCake(){
    let dataBack = this._httpService.makeCake(this.newCake);
    dataBack.subscribe(data=>{
      this.newCake={
        name:'',
        image:''
      }
      this.getAllCakes();
    });
  }

  compCakeInfo(id){
    let dataBack = this._httpService.getCakeById(id);
    dataBack.subscribe(data=>{
      this.imgShow=data;
    });
  }

  addReview(id){
    let dataBack = this._httpService.addReviewToCake(id,this.newReview);
    dataBack.subscribe(data=>{
      this.newReview={
        rating:0,
        review:""
      }
      this.commentTrigger= true;

    })
  }
  
}


