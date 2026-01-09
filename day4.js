
                               //Allocation & Deallocation
               //Allocation
// let obj = {name: "sulthana", age:19};
// let arr = [13, 14, 15];
// console.log(obj);
// console.log(arr);

               //Deallocation
// let obj = {name: "sulthana"};
// obj = null;
// console.log(obj);

                                 //constructor & this
            //constructor
// class fullstack {
//   constructor(name){
//     this.name = name;
//   }
// }
// let p1 = new fullstack("sulthana");
// console.log(p1.name);


// class Person  {
//     constructor(name) {
//         this.name = name;
//     }
// }
// let p1 = new Person("Fathima");
// console.log(p1.name);


            //this
// class person {
//   constructor(name){
//   this.name = name;
// }
// }
// let p1 = new person("sulthana");
// console.log(p1.name)


// let Person = {
//     name: "Fathima",
//     sayHi: function() {
//         console.log("Hello " + this.name)
//     }
// }
// Person.sayHi();


                                 //Generator Functions (function*)
// function* generator() {
//   yield 1;
//   yield 2;
//   yield 3;
// }
// let gen = generator();
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());

                              //Currying 
// function add(a){
//   return function(b){
//     return a+b;
//   };
// };
// console.log(add(1)(7));


// function add(a, b, c) {
//     return a + b + c;
// }
// console.log(add(10, 20, 30));


                              //Call back function
// function greet(name,callback) {
//   console.log("Hello " + name);
//   callback();
// }
// greet("sulthana", function(){
//   console.log("How are you")
// });  


// function greet(name, callback) {
//     callback(name);
// }
// greet("Fathima", (n)=> {
//     console.log("Hello ", n)
// });

