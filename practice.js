                       //Callback function
// setTimeout(function () {
//     console.log("timer");    
// }, 5000)
// function a(b) {
//      console.log("a");
// }
// a(function b () {
//     console.log(a)
// }); 


                      //CallStack
// function first () {
//     second();
// } 
// function second () {
//     third();
// }      
// function third() {
//     const a = 30;   
//     console.log("Helloo!!!")
// }
// first();
                          

                       //Synchronous
// console.log("Start");

                       //Asynchronous
// setTimeout (() => {
//     console.log("Start");
// },0);
// console.log("End");
    
                       //Strict Mode
// 'use strict'
// function greet() {
//     console.log("Helloo!!");
// }
// greet();

                       //Temporal Dead Zone
// console.log(a);
// let a = 10;

// console.log(a);
// const a = 10;

// console.log(a);
// var a = 10;

                       //Exception Handling(try...catch)
// try {
//     throw new Error ("Heyy!!"); 
// } catch (a) {
//     console.log(a.message);
// }

                      //Shadowing
// let a = 10;
// {
//     var b = 20;
//     console.log(a);
//     console.log(b);
// }
// console.log(a);

                     //Illegal Shadowing
// let a = 10;
// {
//     var a = 20;
// }

                     //Type coercion
// console.log("2" + 3);
// console.log("5" - 3);

                     //Stack overflow
// function recurse() {
//    return recurse();
// }
// recurse();

                     //Stack underflow
// let fruit = [];

// function greetfruit() {
//     if (fruit.length === 0) {
//         console.log("Apple")
//         return;
//     }
//     return fruit.greet();
// }
// greetfruit();

                        //Oject & Classes
                 //Object
// let car = {
//     brand: "Toyota",
//     model: "Corolla",
//     start: function() {
//         console.log("Are you ready to go!");
//     }
// };
// console.log(car.brand);
// car.start();

                 //Classes
// class car {
//     constructor(brand, model) {
//         this.brand = brand;
//         this.model = model;
//     }
//     start() {
//         console.log(`${this.brand} ${this.model} Started`);
//     }
// }
// let car1 = new car("Toyota", "Corolla");
// car1.start();

                        //Shallow Copy
// let fruits = {
//     name: "Apple",
//     color: ["Red", "Green"]
// };
// let shallowCopy = {...fruits};
// console.log(fruits)

                        //Deep Copy
// let original = {
//     name: "Anu",
//     hobbies: ["Reading", "Coding"]
// };
// let deepCopy = JSON.parse(JSON.stringify(original));
// deepCopy.name = "Sara";
// deepCopy.hobbies[0] = "Music";
// console.log(original);

                        //Both Shallow copy & Deep copy
// let a = {name: "John"};
// let b = {...a};
// let c = JSON.parse(JSON.stringify(a));
// console.log(c);

                         //Instances
// class student {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//        console.log(`Hi I'm ${this.name}`);     
//     }
// }
// let s1 = new student("Anu");
// s1.greet();



//-------------------------------------------Day wise-----------------------------------------------------------

                              //synchronous
// console.log("Start");
 
                             //Asynchronous
// setTimeout(function() {
//   console.log("First");
// },0);
// console.log("Second");
// console.log("Third");

                             //Execution context
// let name = "Sulthana";
// function greet() {
//   console.log("Hello " + name
//   )
// }
// greet();

                             //Strict mode
// 'use strict'
// function test() {
//   consle.log(this)
// }
// test();


                             //Call stack
// function one() {
//   console.log("First")
//   two();
//   console.log("A");
// }
// function two() {
//   console.log("Second")
//   three();
//   console.log("B");
// }
// function three() {
//   console.log("Third")
//   console.log("C")
// }
// one();


                             //TDZ
// console.log(a);
// let a = 10;

// console.log(a);
// const a = 20;

// console.log(a);
// var a = 30;


                             //Exception Handling(try...catch)
// try {
//   throw Error("Hello")
// }catch(e) {
//   console.log(e.message)
// }


                             //Shadowing and illegal Shadowing
// let a = 100;
// {
//   var b = 20;
//   let a = 10;
//   // a = 50;
//   console.log(a);
//   console.log(b);
// }
// console.log(a);



                             //Type coercion
// console.log("5" + 2);
// console.log("5" - 2);


                             //Stack overflow
// function sayHi() {
//   sayHi()
// }
// sayHi();


                             //Stack underflow
// let stack = [];
// console.log(stack.pop());


                             //objects
// let Person = {
//   name: "Fathima",
//   greet: function() {
//     console.log(`Hello ${this.name}`)
//   }
// }
// Person.greet();


                             //Classes
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//   greet() {
//     console.log(`Hellloo ${this.name}`)
//   }
// }
// let p1 = new Person("Fathimaa");
// p1.greet();



                             //deep copy  
// let arr = [1, 2, 3];
// let deep = [...arr];
// deep.push(4, 5);
// console.log("Original : ", arr);
// console.log("Deep : ", deep);


                             //shallow copy
// let arr = [1, 2, 3];
// let shallow = arr;
// shallow.push(4, 5);
// console.log("Original : ", arr);
// console.log("Shallow : ", shallow);


                             //Instances
// class Person {
//   constructor(name) {
//     this.name = name;
//   }
// }
// let p1 = new Person("Fathimaa");
// console.log(p1.name);


                             //prototype
// function Car(brand) {
//     this.brand = brand;
// }
// Car.prototype.Wheels = 4;
// let c1 = new Car("Toyota");
// console.log(c1.brand, c1.Wheels);

                             //constructor
// class Car {
//   constructor(brand) {
//     this.brand = brand;
//   }
// }
// let car = new Car("Toyota");
// console.log(car.brand)

                             //this
// let Person = {
//   name: "Fathimaa",
//   sayHi: function() {
//     console.log("Heyy " + this.name)
//   }
// }
// Person.sayHi();

                             //Generator function(function*)
// function*genGenerator() {
//   yield "step1";
//   yield "step2";
//   yield "step3";
//   yield "step4";
// }
// let gen = genGenerator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


                             //Currying
// function 
// add(a, b, c) {
//   return a + b + c;
// }
// console.log(add(10, 15, 20));


                             //Callback
// function greet(name, callback) {
//   callback(name)
// }
// greet("Fathimaa", (n) => {
//   console.log("Hello", n)
// });


                             //Promise
// let myPromise = new Promise((resolve, reject) => {
//   let success = true;
//   if(success) {
//     resolve("Operation successfull")
//   }else {
//     reject("Operation failed")
//   }
// });
// console.log(myPromise);

//                             //Handling
// myPromise
// .then((result) => {
//   console.log(result)
// })
// .catch((error) => {
//   console.log(error)
// });

                           //(async/await)
// async function one() {
//   let numb = await Promise.resolve("first")
//   console.log(numb)
// }
// one();

// async function one() {
//   try {
//   let numb = await Promise.reject("first")
//   console.log(numb)
// }catch(err) {
//   console.log(err)
//   }
// }
// one();




















