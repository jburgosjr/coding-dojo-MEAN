import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';
import { ChoiService } from './choi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
 constructor(private _httpService:HttpService,private choi:ChoiService, private router:Router){

 }
 ngOnInit(){
  this.choi.startWallet();
  this.choi.startValue();
  this.choi.startCash();
  this.startHome();

 }
 startHome(){
   this.router.navigate(['/home']);
 }

}


