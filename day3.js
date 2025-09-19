   //Stack overflow & Stack underflow
          //stack overflow
// function greet() {
//   greet();
// }
// greet();

          //stack underflow
// let stack = [];
// stack.push(150);
// stack.push(300);
// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

                             //Objects & Classes
           
           //Objects
// let car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2022,
//   start: function() {
//     // console.log("Car Started");
//   }
// };
// console.log(car.brand);
// // car.start();

            //Classes
// class Car {
//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }
//   start() {
//     console.log(`${this.brand} ${this.model}`);
//   }
// }
// let car1 = new Car("Toyota", "Corolla");
// car1.start();


                         //Shallow Copy
// let original = {
//   name: "Anu",
//   hobbies: ["reading", "coding"]
// };
// let shallowCopy = {...original };
// shallowCopy.name = "Sara";
// shallowCopy.hobbies[0] = "music";
// console.log(original);


// let fruits = {
//   name: "Apple",
//   color: ["Red", "Green"]
// };
// let shallowCopy = {...fruits };
// console.log(fruits);

                        //Deep Copy
// let original = {
//   name: "Anu",
//   hobbies: ["reading", "coding"]
// };
// let deepCopy = JSON.parse(JSON.stringify(original));
// deepCopy.name = "Sara";
// deepCopy.hobbies[0] = "music";
// console.log(original);


// let vegetable = {
//   name: "Tomato",
//   color: ["Red"]
// };
// let deepCopy = JSON.parse(JSON.stringify(vegetable));
// console.log(vegetable);


                            //Instances and Prototypes
          //Instances
// class Car {
//   constructor(name){
//     this.name = name;
//   }
// };
// let car = new Car ("BMW");
// console.log(car);

         //Prototypes
// function person(name) {
//   this.name = name;
// } person.prototype.sayHello = function() {
//   console.log("Hello, I am " + this.name)
// };
// let p = new person ("Ali");
// p.sayHello();
 
                               //Memoization
// let cache = {};
// function add(a, b) {
//   const key = a + b;
//   return cache[key]  || (console.log("calculating..."),cache[key] = a + b)
// };
// console.log(add(5,3));
// console.log(add(2,10));

