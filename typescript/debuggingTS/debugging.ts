
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = 9;//can not assign int to string variable type conflict

//------------------------------------------------------------------------

function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello(9));// function is expecting a string input and its being sent an int. conflict of types

 //----------------------------------------------------------------------

 function fullName(firstName: string, lastName: string, middleName: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "Jones")); // function expecting three arguments, only being sent two

 //------------------------------------------------------------------------------

 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belt: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay)); //jay is not an instence of student since the belt field does not match the belts field for the student object

 //---------------------------------------------------------------------------------------------

 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = Ninja();
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));//error being that the instance of ninja is not being called as new. it has to be 'new Ninja()'. as for the error in console log is because turing is not an instance of ninja either. 

 //------------------------------------------------------------------------------------------------

 var increment = x => x + 1;
 // This works great:
 console.log(increment(3));
 var square = x => {x * x};// no need for squiggle brackets
 // This is not showing me what I want:
 console.log(square(4));
 // This is not working:
 var multiply = x,y => x * y;// the arguments need to be in paraenthesis
 // Nor is this working:
 var math = (x, y) => let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x-y);
    return [sum, product, difference]; //after the arrow all the variables and return need to be inbetween {}

//------------------------------------------------------------------------------------