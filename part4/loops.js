/* 
Generate a code that computes the sum of numbers from 1 to 5
*/
let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
// console.log(sum);

let summDown = [];
let j = 5;
while (j > 0) {
  summDown.push(j);
  j--;
}
// console.log(summDown);

// let teaCollection = [];
// let tea;

// do {
//   tea = prompt(`Enter your favorite tea--enter 'stop' to finish`);
//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");
let total = 0;
let k = 1;
do {
  total += k;
  k++;
} while (k <= 3);
// console.log(total);
let multipliedNumbers = [];
let numbers = [2, 4, 6];
let l = 0;
for (l; l < numbers.length; l++) {
  multipliedNumbers.push(numbers[l] * 2);
}
// console.log(multipliedNumbers);

let cities = ["London", "Paris", "Tokyo", "New York"];
let cityList = [];
for (c = 0; c < cities.length; c++) {
  let city = cities[c];
  cityList.unshift(city);
}
// console.log(cityList);
let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  let tea = teas[i];
  if (tea === "chai") {
    break;
  }
  selectedTeas.push(tea);
}
// console.log(selectedTeas);

cities = ["London", "New York", "Paris", "Berlin", "Tokyo", "Kyoto", "Riyadh"];
let newS = [];
for (let i = 0; i < cities.length; i++) {
  if (cities[i] !== "Paris" && cities[i] !== "paris") {
    newS.push(cities[i]);
  } else {
    continue;
  }
}
// console.log(newS);
numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

teaTypes = ["green tea", "herbal tea", "black tea", "chai", "oolong tea"];
selectedTeas = [];
for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }
  selectedTeas.push(tea);
}

// console.log(selectedTeas);
let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};
let cityNewPopulation = {};

for (const city in citiesPopulation) {
  if (city === "Berlin" || city === "berlin") {
    break;
  }
  cityNewPopulation[city] = citiesPopulation[city];
}
// console.log(cityNewPopulation);
// console.log(cityPopulations);
cities = ["London", "New York", "Paris", "Berlin", "Tokyo", "Kyoto", "Riyadh"];
let newC = [];
for (const city of cities) {
  if (city === "Kyoto" || city === "kyoto") {
    continue;
  }
  newC.push(city);
}
// console.log(newC);

let WorldCities = {
  Sydney: 5000000,
  Tokyo: 9000000,
  Berlin: 3500000,
  Paris: 2200000,
};
let largeCities = {};
for (const city in WorldCities) {
  if (WorldCities[city] < 3000000) {
    continue;
  }

  largeCities[city] = WorldCities[city];
}
// console.log(largeCities);

teas = ["green tea", "herbal tea", "black tea", "chai", "oolong tea"];
preferredTeas = [];
teas.forEach((tea) => {
  if (tea === "chai") {
    return;
  }
  preferredTeas.push(tea);
});
// console.log(preferredTeas);
cities = ["London", "Sydney", "Paris", "Berlin", "Tokyo", "Kyoto", "Riyadh"];
let travelledCities = [];
cities.forEach((city) => {
  if (city === "Sydney" || city === "sydney") {
    return;
  }
  travelledCities.push(city);
});
// console.log(travelledCities);

let nums = [2, 5, 7, 9];
let doubledNumbers = [];
for (let i = 0; i < nums.length; i++) {
  if (nums[i] === 7) {
    continue;
  }
  doubledNumbers.push(nums[i] * 2);
}
// console.log(doubledNumbers);
let myTeas = ["chai", "green Tea", "black tea", "jasmine tea", "herbal tea"];
let shortTeas = [];
for (const tea of myTeas) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
