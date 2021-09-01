/* function MyName()
{
 var name = "Nayeem";
 console.log(MyName); 
}

 */

//2
/* var name = "nayeem";
function myfun(){

}

console.log(name); */

//variabe hoisting

name = "Nayeem";
console.log(name);
var name;

//loop

/* var i;
for(i=1;i<=10;i++)
{
    console.log(i);
} */

//for of loop

/* var myCountry = ['Dhaka', 'Barisal', 'Rangpur', 'Chandpur']

for(let myCity of myCountry){
    console.log(myCity);
} */


//oop

/* var billGates = {shirt: true,shirtColor:"offWhite", smile:true,swatter:true}

var billGatesPro = {
   shirt:{
    color:"blue",
    Quality:"Good",
    price:"1000TK"
   }
   
}
 */

//for in loop
var billGates = {shirt: true,shirtColor:"offWhite", smile:true,swatter:true}

for (let props in billGates){
    //console.log(billGates[props]);
    console.log(props +"="+ billGates[props]);
}

//simple function

/* function mySum()
{
    var x = 10;
    var y = 10;
    var z = x+y;

    console.log(z);
}

mySum(); */

//parameter function

/* function myNew(x,y){
    var Z = x+y;
    console.log(Z);
}

myNew(30,21); */


//Rest parameter

function something(...x)
{
    console.log(x);
    console.log(x[4]);

}

something(1,2,3,4,5,6,7,8);

function myFunction()
{
    return "Bangladesh"
}

console.log(myFunction());

//annoymous function

var myfun = function(){
    return "hello"
}

var myfun = function(){
    return "hello monu"
}
console.log(myfun());

//arrow function

var myArrow =()=>{
    console.log("My first Arrow function");
}

myArrow();
