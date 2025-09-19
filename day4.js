
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

            //this
// class person {
//   constructor(name){
//   this.name = name;
// }
// }
// let p1 = new person("sulthana");
// console.log(p1.name)

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

                              //Currying examples
// function add(a){
//   return function(b){
//     return a+b;
//   };
// };
// console.log(add(1)(7));

                              //Call back function
// function greet(name,callback) {
//   console.log("Hello " + name);
//   callback();
// }
// greet("sulthana", function(){
//   console.log("How are you")
// });  
