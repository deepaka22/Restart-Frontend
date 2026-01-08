//1.  Fruits shop example program
// function fruitShop(noofapple, noofbannana, noofpineapple, opens){

// var applePrice = 10
// var bannanaPrice = 20;
// var pineapplePrice = 30;
// var ShopOpen = opens;

// if (ShopOpen === true){
//     ShopOpen = "opened"
//     return  ((noofapple*applePrice)+ (noofbannana*bannanaPrice)+(noofpineapple*pineapplePrice))
// }
// else{
//     ShopOpen = "closed"
//     return ShopOpen
// }

// }

// function applyDiscount (Actualprice){
// var dicountedPrice = Actualprice;

// if(dicountedPrice >= 100){
//     dicountedPrice = dicountedPrice - (0.2 *Actualprice );
//     return " Actual price is " + dicountedPrice;
// }
// else {
//     return " no discount available";
// }
// }

 
// var informationcustomer1 = fruitShop(1,1,1,true) 
// var discountinfor = applyDiscount(informationcustomer1);

// console.log("customer1 needs to pay with RS: " + informationcustomer1 +  discountinfor);

// var informationcustomer2 = fruitShop(5,5,2,true) 
// var discountinfor = applyDiscount(informationcustomer2);
// console.log("customer2 needs to pay with RS: " + informationcustomer2 +  discountinfor);

// ***************************************************************************************

// 2. Healthy excersices 

// function excerciseMadeToday(excersicesDone, gym_info, warmUp, no_of_sets, repsDoneIn_oneSet){
// var excerciseMade = excersicesDone;
// var gymOpened =  gym_info   
// var isWarmUp = warmUp;
// var sets_of_pushups_made = no_of_sets;
// var repsInoneSets = repsDoneIn_oneSet;

// if (excerciseMade === true && isWarmUp===true){
//     isWarmUp = "done"
//     return " nice that excercise was made today  " + " And gym was " + gymOpened + " warmup was " +
//      isWarmUp + " i made " + sets_of_pushups_made + " today " + " As one rep contains " + repsInoneSets 
//      + " reps."
//     } else {
//         return " i have not made my workout today";
//     }


// }



// var customer1 = excerciseMadeToday(true, "opened", true, 5, 15);
// var customer2 = excerciseMadeToday(false, "opened", true, 0, 0);

// console.log(customer2);


// var bannaCount = 15;

// for (i=0; i<bannaCount;i++){
//     bannaCount = bannaCount-2;
//     console.log(`this is bannacount : ${bannaCount}`);
//     console.log(`This is i value : ${i}`);

// }

// var stocksHold = 10;

// while(stocksHold<bannaCount){

//     stocksHold++
    
//     console.log(stocksHold);
// }
// console.log("stocks holding" +stocksHold);

// pre increment vs post increment
// var a = 10;
// console.log(a++);
// a= a++
// console.log(a++);
// a= a++
// console.log(a++);


// var callList = 0;

// while(callList<=10){

//     callList=callList+1;
//     console.log(callList);
//      break;

// }

// var LoopCheck = true;
// var loopCount = 5;

// function forLoopCheck (loops) {

//         for (i=0; i<loops;i++){
        
//          if(LoopCheck == true ){
//             return ("loop activated" + (loops + 1) );
//         }else{
//         return ("Loop not activated : As loopCheck is false");
//     }
//         }
// }

// var alphaMan = forLoopCheck(loopCount);

// console.log(alphaMan);

// var array = ["deepak", 22, 2018]

// var newObj = {name:"deepak",age : 22, isMarried : true, passedOutyr:2018};

// for (i=0; i<array.length; i++){
//     console.log(" Array index is" + i + " and arrary value"+ array[i]);
// }

// console.log(newObj.name);
// console.log(newObj.age);
// console.log(newObj.isMarried);
// console.log(newObj.passedOutyr);
// console.log(newObj);
// console.log(array.length);

// for (var key in newObj){
    
//     console.log( key +  " : " + newObj[key]);

// }

// // console.log(newObj);
// console.log(newObj.key);

// console.log(newObj.name, newObj["age"]);


// var sample = function string (){
//     return ("hello world");
// }
// var result = sample();
// console.log(result);


// var console1 = {
//     log: function( message){
//         console.log(message);
//     }
// }

// console1.log("hello world");

// console.log(console);


// var object = {namingCer: function(){

//     console.log("hello world");
// }}

// console.log(object.namingCer());

// object.namingCer();

// function exampleScope() {
//   if (true) {
//     let message = "Hello, world!";
//     console.log(message); // Works inside the block
//   }
  
// console.log(message)   // Works outside the block because var is function-scoped
// }

// ;

// exampleScope();

// {let a = 10;}

// console.log(a);

//  let a = "strings makes love";

//  let b = a.split(" ")

//  console.log(b[0]);

let a = ["jil", "jung", "juck", "apple", "mango"];

// console.log(a.slice(2));
// console.log(a.slice(1));
// console.log(a.slice(1,4));
// console.log(a.slice(-1));
// // console.log(a.slice(-2));
// console.log(a.slice(1,-3));
// console.log(a.slice(1,-2));
// console.log(a.slice(1,-1));
console.log(a.slice(0,-1));

// console.log(a.slice(1,1));
// console.log(a.slice(1,2));
// console.log(a.slice(1,3));
// console.log(a.slice(1,4));
