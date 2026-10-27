let teaFlavors = ["green tea", "black tea", "oolong tea"];

// let teaFl = new Array("green tea", "black tea", "oolong tea");
const firstTea = teaFlavors[0]; //accesses the first element of the array
let cities = ["London", "Tokyo", "Paris", "Riyadh", "New York"];
const favoriteCity = cities[4];

let teaTypes = ["herbal tea", "white tea", "masala chai"];
teaTypes[1] = "jasmine tea";
// console.log(teaTypes);

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited[citiesVisited.length] = "Berlin";
citiesVisited.push("Tokyo");
// console.log(citiesVisited);
let teaOrdered = ["black tea", "green tea", "matcha", "earl grey"];
let lastOrder = teaOrdered.pop();
// console.log(teaOrdered);
// console.log(lastOrder);
let popularTeas = ["green tea", "oolong tea", "chai"];
popularTeas.pop();
let softCopyTeas = popularTeas;
// popularTeas.push("shahi");
// console.log(softCopyTeas);
// console.log(popularTeas);
let topCities = ["Tokyo", "Singapore", "Seol"];

let hardCopyCities = [...topCities];
let hard2CopyCities = topCities.slice();
topCities.pop();
// console.log(hardCopyCities);
// console.log(hard2CopyCities);
// console.log(topCities);
let europeanCities = ["Paris", "London"];
let concatenateCities = topCities.concat(europeanCities);
console.log(concatenateCities);
let isLondonOnTheList = europeanCities.includes("London");
console.log(isLondonOnTheList);
