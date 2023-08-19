const result = document.getElementById("result");
let sellSelector = document.getElementById("sellSelector");
const buySelector = document.getElementById("buySelector");
const moneyAmount = document.getElementById("moneyAmount");
const exchange = document.getElementById("exchange");

const rates = {
  usd: 3900,
  eur: 4200,
  sgd: 2700,
  bath: 1100,
  kyat: 1,
  none: null,
};
console.log(Object.keys(rates));
 const sellId = sellSelector.value
   let sellCurrency = rates[sellId];
   console.log(sellCurrency);

// const resultCurrentRate = () => {
 
// };
console.log(Object.values(rates));
// exchange.addEventListener("click", () => {
  
//   let sellCurrency= Object.values(rates)[];
//   console.log(sellCurrency);

//   let buyCurrency = rates[buySelector.value];
//   resultCurrentRate = (moneyAmount * buyCurrency) / sellCurrency;

 

//   result.innerText = resultCurrentRate

// });
