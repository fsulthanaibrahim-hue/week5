                                    //Synchronous vs Asynchronous JS
                    //synchronous
// console.log("Start");
// console.log("Start1");
// console.log("End");

// console.log("Alpha");
// console.log("Beta");
// console.log("Gamma");


                   //Asynchronous
// console.log("Start");
// setTimeout(() => {
//    console.log("Step1");
// },2000);
// console.log("End");

// console.log("Start");
// setTimeout(() => {
//    console.log("Step1(after 2 seconds)");
// },2000);
// console.log("End");

// console.log("Alpha");
// setTimeout (() => {
//    console.log("Beta");
// },2000);
// console.log("Gamma");

// console.log("start");
// setTimeout(() => {
//   console.log("Start1");
// },2000);
// console.log("End");

// console.log("Good Morning");
// setTimeout(() => {
//   console.log("Good Night");
// },2000);
// console.log("Good Evening");


                      //Execution Context
// var name = "Anu";
// function greet() {
//    var message = "Hello " + name;
//    console.log(message);
// }
// greet();
               


               //Strict Mode ('use strict')
// 'use strict';
// function test() {
//    console.log(this);
// }
// test();



              //Call Stack visualization in DevTools
// function first() {
//   console.log("first");
//   second();
//   console.log("A");
// }
// function second(){
//   console.log("second");
//   third();
//   console.log("B");
// }
// function third(){
//   console.log("C")
// }
// first();



