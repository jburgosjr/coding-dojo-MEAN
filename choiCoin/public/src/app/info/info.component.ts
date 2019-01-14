import { Component, OnInit } from '@angular/core';
import { ChoiService } from '../choi.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  transaction:any;
  constructor(private choi:ChoiService) { 

  }

  ngOnInit() {
    this.getTransaction();
  }

  getTransaction(){
    this.transaction=this.choi.infoObject;
  }

}
