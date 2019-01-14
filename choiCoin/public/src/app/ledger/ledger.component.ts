import { Component, OnInit } from '@angular/core';
import { ChoiService } from '../choi.service';

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit {
  ledger=[];
  constructor(private choi:ChoiService) { }

  ngOnInit() {
    this.getLedger();
  }

  getLedger(){
    this.ledger=this.choi.ledger;
    console.log(this.ledger)
  }

  addToInfo(info:object){
    this.choi.addObject(info);
    console.log(this.choi.infoObject);
  }

}
