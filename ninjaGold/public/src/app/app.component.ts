import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  totalG:number;
  aLog=[];
  game:any;
  gameId:string;
  constructor(private _httpService: HttpService){}

  ngOnInit(){
    this.game={id:''}
  }

  loadGame(){
    var saveGame =this._httpService.loadGame(this.game.id);
    saveGame.subscribe((data:any)=>{
      console.log(data);
      this.aLog=data.log;
      this.totalG = data.totalGold;
      this.gameId = data._id;
    })
  }

  startNewGame(){
    let stats = this._httpService.initializeGame();
    stats.subscribe(data=>{
      this.totalG = data['data'].totalGold;
      this.aLog = data['data'].log;
      this.gameId=data['data']._id;
  
    })
  }

  saveGame(){
    let saveData = this._httpService.loadGame(this.gameId);
    saveData.subscribe((data:any)=>{

      data.totalGold = this.totalG;
      data.log = this.aLog;
      let observble = this._httpService.saveGameAndSet(data);
      observble.subscribe(data => {

      });
    })
  }

  farm(){
    var rand = Math.floor(Math.random()*4)+2;
    var whammy = Math.floor(Math.random()*5)+1;

    if(whammy < 5){
      var gain = rand;
      this.totalG += gain;
      this.aLog.push(`You have a good crop this season. you harvest and sell it for ${gain} gold!`);
    }
    else{
      var loss = rand;
      this.totalG -= loss;
      this.aLog.push(`The soil aint as bountiful as it used to be, you loose ${loss} gold!`);
    }
  }

  cave(){
    var rand = Math.floor(Math.random()*6)+5;
    var whammy = Math.floor(Math.random()*5)+1;

    if(whammy < 5){
      var gain = rand;
      this.totalG += gain;
      this.aLog.push(`You make your wave through the cave....whats that?! you see a chest at the end of the path. you open it and find ${gain} gold!`);
    }
    else{
      var loss = rand;
      this.totalG -= loss;
      this.aLog.push(`You make your wave through the cave...whats that noise?! you get scared and run away like a pansy. you loose ${loss} gold!`);
    }
  }

  house(){
    var rand = Math.floor(Math.random()*9)+7;
    var whammy = Math.floor(Math.random()*5)+1;

    if(whammy < 5){
      var gain = rand;
      this.totalG += gain;
      this.aLog.push(`You break into someones home. you steal ${gain} gold! .....you need to rethink your life choices`);
    }
    else{
      var loss = rand;
      this.totalG -= loss;
      this.aLog.push(`You break into someones home. Youre not very good at it and the owner finds you. get ready for a beating. trying to escape you drop ${loss} gold! serves you right`);
    }
  }

  casino(){
    var rand = Math.floor(Math.random()*100);
    var whammy = Math.floor(Math.random()*3)+1;

    if(whammy == 1){
      var gain = rand;
      if(gain < 2){
        this.totalG += gain;
        this.aLog.push(`i guess its still a win? its not much but you win ${gain} gold`);
      }
      else{
        this.totalG += gain;
        this.aLog.push(`Lets get this bread. Lady luck blesses your roll. you win ${gain} gold`);
      }
      
    }
    else{
      var loss = rand;
      this.totalG -= loss;
      this.aLog.push(`lets just say you shouldnt quit your day job. Lady luck laughs at your weak skills. you loose ${loss} gold!`);
    }
  }

}
