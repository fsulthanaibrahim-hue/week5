
//                        //Promises  
// let myPromise = new Promise((resolve, reject)=>{
//   let success = true;
//   if (success) {
//     resolve("Operation successful!");
//   } else {
//     reject("Something went wrong");
//   }
// });

//                      //handling(.then/.catch)
//  myPromise 
//  .then((result)=> {
//   console.log(result)
//  })
//  .catch((error)=> {
//    console.log(error)
//  });
                     
    
                    //Fetch API (using a public API like Weather or PokeAPI)
                
// fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// .then((response) => response.json())
// .then((data)=> {
//   console.log("Name:",data.name);
//   console.log("Height:",data.height);
//   console.log("Abilities:",data.abilities.map(a=>a.ability.name));
// })
// .catch((error)=> {
//   console.log("Error fetching data:", error);
// });


                         //(async/await)
// async function run() {
//   let data = await Promise.resolve("Helloo")
//   console.log(data);
// }
// run();


// async function one() {
//   let numb = await Promise.resolve("first")
//   console.log(numb);
// }
// one();

