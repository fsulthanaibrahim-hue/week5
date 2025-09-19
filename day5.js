
                       //Promises and handling Promise-based methods
// let myPromise = new Promise((resolve, reject)=>{
//   let success = true;
//   if (success) {
//     resolve("Operation successful!");
//   } else {
//     reject("Something went wrong");
//   }
// });
// myPromise
// .then(result => {
//   console.log(result);
// })








                       //Fetch API (using a public API like Weather or PokeAPI)
         
                //PokeAPI       
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

                //WeatherAPI
// fetch("https://api.open-meteo.com/v1/forecast?latitude=51.5072&longitude=0.1276&current_weather=true")
// .then((res)=>res.json())
// .then((data)=> {
//     console.log("Temperature:", data.current_weather.temperature, "°C");
//     console.log("Windspeed:", data.current_weather.windspeed, "km/h");
// })
// .catch((err)=>console.error("Error:", err));










