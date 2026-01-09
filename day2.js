                    //Temporal Dead Zone
// console.log(a);
// let a = 10;

// console.log(20);
// const a = 20;

// console.log(a);
// var a = 30;

               //Exception handling
// try {
//     let data = JSON.parse('{"name":"Anu"}');
//     console.log(data.name);
// }
// catch(err) {
//     console.log("Error: " + err.message);
// }
// finally {
//     console.log("This block always runs");
// }


// try {
//   let a = 300;
//   console.log(a);
//   console.log(b);
// }catch(err) {
//   console.log("caught:",err.message)
// }                         
             

// try {
//        throw Error("Hello");
// }catch(e) {
//        console.log(e.message)
// }

                 //Shadowing & Illegal Shadowing
          //Shadowing
// let a = 10;
// function test() {
//       let a = 20;
//       console.log(a);
// } 
// test();
// console.log(a);

         //illegal shadowing
// var c = 50;
// {
//       let c = 60;
//       console.log(c);
// }
// console.log(c);


               //Legal Shadowing
// let a = 100;
// {
//   let a = 200;
//   console.log(a)
// }
// console.log(a)

               //type coercion
// console.log("9"+3)


                //Memory Leaks
// function leak() {
//      let bigData = new array(1000).fill("😆");
//      console.log(bigData);
// }                
// leak();
               
                //Without Leak
// function noleak() {
//        let bigData = new array(1000).fill("😆");
//        console.log(bigData);
// }
// noleak();












