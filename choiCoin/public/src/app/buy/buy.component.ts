import { Component, OnInit } from '@angular/core';
import { ChoiService } from '../choi.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  coinWallet:number;
  coinValue:number;
  cashWallet:number;
  purchase:any;
  errMessage:string;
  message:string;
  constructor(private choi:ChoiService) { 

  }

  ngOnInit() {
    this.getInfo();
    this.purchase={
      amount:0
    }
    this.errMessage="";
    this.message="";
  }

  getInfo(){
    this.coinWallet=this.choi.coinWalletAmount();
    this.coinValue=this.choi.getCoinValue();
    this.cashWallet=this.choi.getCashWallet();
  }

  buyCoin(){
    if(this.cashWallet ==0){
      this.message="";
      this.errMessage="Not Enough funds to buy coin";
      this.purchase.amount=0;
    }
    else if(parseInt(this.purchase.amount)*this.choi.coinValue > this.choi.cashWallet){
      this.message="";
      this.errMessage=`Not Enough funds to buy ${this.purchase.amount} coin(s)`;
      this.purchase.amount=0;
    }
    else{
      this.errMessage="";
      this.message=`Purchase of ${this.purchase.amount} coin(s) complete`;
      this.choi.transactionGenerator("Buy",parseInt(this.purchase.amount));
      this.choi.addCoinToWallet(parseInt(this.purchase.amount));
      this.choi.subCashWallet(parseInt(this.purchase.amount));
      this.purchase.amount=0;
      this.getInfo();
    }
  }

}
