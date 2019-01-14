import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChoiService {
  coinWallet:number;
  coinValue:number;
  cashWallet:number;
  ledger=[];
  infoObject:any;
  constructor() { 

  }

  addCoinToWallet(amount:number){
   
    this.coinWallet += amount;
    this.coinValue += amount;
    console.log("coin value",this.coinValue)
  }

  coinWalletAmount(){
    return this.coinWallet;
  }

  startWallet(){
    this.coinWallet =0;
  }

  startValue(){
    this.coinValue= 1;
  }
  

  subFromWallet(amount:number){
   this.coinWallet-=amount;
   this.coinValue-=amount;
  }

  addToLedger(info:object){
    this.ledger.push(info);
    console.log(this.ledger);
  }

  transactionGenerator(type:string, amount:number){
    var timeStamp= new Date();
    var info={
              id:this.generateId(),
              transaction:type,
              amount:amount,
              time:timeStamp,
              valueAtPurchase:this.coinValue

            }
    this.addToLedger(info);
  }

  generateId(){
    var id= ('_' + Math.random().toString(36).substr(2, 9));
    return id;
  }

  startCash(){
    this.cashWallet = 0;
  }

  getCoinValue(){
    return this.coinValue;
  }

  getCashWallet(){
    return this.cashWallet;
  }

  subCashWallet(amount:number){
    this.cashWallet-=amount;
  }

  addToCashWallet(amount:number){
    this.cashWallet+=amount;
  }

  addObject(info:object){
    this.infoObject = info;
  }
}

 