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

/* name = "Nayeem";
console.log(name);
var name; */

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
/* var billGates = {shirt: true,shirtColor:"offWhite", smile:true,swatter:true}

for (let props in billGates){
    //console.log(billGates[props]);
    console.log(props +"="+ billGates[props]);
} */

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

/* function something(...x)
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
 */
//annoymous function

/* var myfun = function(){
    return "hello"
}

var myfun = function(){
    return "hello monu"
}
console.log(myfun()); */

//arrow function

/* var myArrow =()=>{
    console.log("My first Arrow function");
}

myArrow(); */

//array

/* var myArray = new Array ("a","b","c","d")

for(let item of myArray)
{
    console.log(item);
} */

//multidimentonal array

/* var bangladesh = ["Dhaka", "chandpur", "Rangpur"]
var india = ["Mumbai","Channai", "Kolkhata"]

var asia = [bangladesh,india]

console.log(asia[0][1]); */

//de-structure

/* var countries = ["BAN","IND","XA","PAk"]

var[, ,a,c] = countries

console.log(a,c); */

//map

/* var myMap= new Map();
myMap.set("key1", "Bangladesh");
myMap.set("key2", "India");
myMap.set("key3", "Maldiv");
myMap.set("key4", "Hongkong");
myMap.set("key5", "Nepal"); */
//console.log(myMap.set());
//console.log(myMap.values());

//myMap.delete("key2");

//myMap.get("key3")
//myMap.clear();
/* for(let item of myMap.values()){
    console.log(item);
} */

/* if(myMap.has("key10")){
    console.log("Yes");
}
else{
    console.log("Nop");

} */
//set
/* var mySet = new Set();

mySet.add('Bangladesh');
mySet.add('Nepal');
mySet.add('Barisal');

console.log(mySet); */

//class

/* class MyClass
{
    myFun()
    {
        console.log("Hello Sabbir Bhai");
    }
    myFun2()
    {
        console.log("Bhai kto number chole");
    }
    myFun3()
    {
        console.log("Bhai .....!!!!");
    }
    myFun4(name)
    {
        console.log(name);
    }
}

var obj = new MyClass;
obj.myFun2();
obj.myFun4("valo Lage nah");
 */
//constructor

/* class myClasss{
    constructor(){
        console.log("Hello I am Nayeem");
    }
}

new myClasss(); */

/* class myClass{
    constructor(a,b){
        //console.log(a+b);
        this.firsthNum = a
        this.secondNum = b
    }

    add(){
        let result = this.firsthNum+ this.secondNum;
        console.log(result);
    }
}

var obj = new myClass(10,30);
obj.add(); */

//static keyword

/* class myClass{
    

   static hello(){
       console.log("hello vlo achoni");

    }
}

myClass.hello(); */

//Inheritence

/* class parent{
    hello(params)
    {
        console.log("hello sss");
    }
}

class child extends parent{
    hello(params)
    {
        console.log("hello ms. ami tmr theke oo powerfull");
    }

}
var obj = new child();
obj.hello(); */

//Module


