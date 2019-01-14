import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { stringify } from 'querystring';
import { ChoiService } from '../choi.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  question:string;
  answer:string;
  wallet:number;
  mined:number;
  mineBoolean:any;
  correct:string;

  constructor(private _httpService:HttpService, private choi:ChoiService){
    
  }
  ngOnInit(){
   this.getQuestion()
   this.mined = 0;
   this.getWallet();
   this.mineBoolean ={
     guess:""
   }
   this.correct="warning"
  
 
 
  }
  
  getQuestion(){
    let dataBack = this._httpService.getTrivaQuestion();
    dataBack.subscribe((data:any)=>{
      this.question = data.results[0].question;
      this.answer = data.results[0].correct_answer;
      console.log(this.answer)
    });
  }

  getWallet(){
    this.wallet = this.choi.coinWalletAmount();
    
  }
  mine(){
    if(this.mineBoolean.guess == this.answer){
      this.correct="success";
      this.mined+=1;
      this.choi.addCoinToWallet(1);
      this.choi.transactionGenerator("Mined",1);
      this.getWallet();
      this.mineBoolean.guess="";
      this.getQuestion();
    }
    else{
      if(this.wallet != 0){
        this.correct="danger";
        this.getWallet();
        this.mineBoolean.guess="";
        this.getQuestion(); 
      }
      else{
        this.correct="danger";
        this.getWallet();
        this.mineBoolean.guess="";
        this.getQuestion(); 
      }
    }
  }

}
