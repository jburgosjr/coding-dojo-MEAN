class Bike{
    price: string;
    max_speed: number;
    miles: number ;  
    constructor(price,max_speed){
        this.price = price;
        this.max_speed = max_speed;
        this.miles =0;
    }

    displayInfo(){
        console.log(`Miles ridden: ${this.miles}, Bike Price: ${this.price}, Max Speed: ${this.max_speed}`);

    }

    ride(){
        this.miles += 10;
        console.log(`Riding.............`)
        console.log('-------- __@ ');
        console.log('----- _`\<,_ ');
        console.log('---- (*)/ (*)');
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        console.log(`you rode 10 miles...total miles riden: ${this.miles}`)
        return this;
    }

    reverse(){
        if(this.miles == 0){
            console.log('you can ride negative miles. you need to ride more miles forward like a normal person')
        }
        else{
        this.miles -= 5;
        console.log(`Riding.............`)
        console.log('    _@ --------');
        console.log('  _`\<,_ -----');
        console.log(' (*)/ (*)----');
        console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')
        console.log(`you rode 5 miles in reverse...total miles riden: ${this.miles}`)
        return this;
      }
    }

    
}