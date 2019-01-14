import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.catchEmAll();
    this.abilityCount();
  }

  catchEmAll(){
    // our http response is an Observable, store it in a variable
    let pokemon = this._http.get('https://pokeapi.co/api/v2/pokemon/9/');
    // subscribe to the Observable and provide the code we would like to do with our data from the response
    pokemon.subscribe((data:any) => {
      console.log("Got our pokemon!", data);
      console.log(`Pokemon Name: ${data.name}`);
      console.log(`${data.name}'s abilities are: ${data.abilities[0].ability.name}, ${data.abilities[1].ability.name} `)
      console.log(`Some of ${data.name}'s moves are: ${data.moves[0].move.name}, ${data.moves[1].move.name}, ${data.moves[2].move.name}, and ${data.moves[3].move.name} `);
    });
  }

  abilityCount(){
    var aCount=0;
    var bCount=0; 


    for(let i =1; i < 252 ; i++){
      

      let pokemon = this._http.get(`https://pokeapi.co/api/v2/pokemon/${i}/`);

      pokemon.subscribe((data:any)=>{
        bCount+=1;
        if(data.abilities[0].ability.name == "rain-dish" ){
          aCount+=1;
         
          
        }
        if(bCount==251){
          console.log(`out of the first two generations, ${aCount} pokemon have the ability "rain-dish"`);
    
        }
        
        
      });

    }

  
  }
}