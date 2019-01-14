import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-cake',
  templateUrl: './cake.component.html',
  styleUrls: ['./cake.component.css']
})
export class CakeComponent implements OnInit {
  @Input() cakeInfo:any;
  avg:number
  constructor() { }

  ngOnInit() {
    this.average()
    console.log(this.cakeInfo)
  }

  average(){
    var count=0;
    for(var i =0; i< this.cakeInfo.cake.reviews.length;i++){
      count += this.cakeInfo.cake.reviews[i].rating;
    }
    this.avg=count/this.cakeInfo.cake.reviews.length;
  }

}
