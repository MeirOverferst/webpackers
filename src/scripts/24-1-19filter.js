const fishProducts = [
    { species: "Corvina", weight: 18, pricePerKg: 100 },
    { species: "Luvina", weight: 1.6, pricePerKg: 250 },
    { species: "Bacalao", weight: 32, pricePerKg: 60 },
    { species: "Tuna", weight: 450, pricePerKg: 1000 },
    { species: "Corvina", weight: 12, pricePerKg: 80 },
    { species: "Hering", weight: 0.03, pricePerKg: 4 },
    { species: "Luvina", weight: 1.8, pricePerKg: 280 },
    { species: "Bacalao", weight: 25, pricePerKg: 50 },
    { species: "Tuna", weight: 350, pricePerKg: 850 },
    { species: "Corvina", weight: 22, pricePerKg: 120 },
    { species: "Luvina", weight: 2.2, pricePerKg: 320 },
    { species: "Bacalao", weight: 38, pricePerKg: 75 }

];


const onlyCorvina = fishProducts.filter(elem => elem.species == "Corvina");
const luvina = fishProducts.filter(elem => elem.species == "Luvina");
const tuna = fishProducts.filter(elem => elem.species == "Tuna");
const bacalao = fishProducts.filter(elem => elem.species == "Bacalao");
const blabla = onlyCorvina.map(elem => { return elem.pricePerKg });

// const result = corvina.find(obj => {
//     return obj.species === "Corvina"
// })

// console.log(result);
console.log(blabla);
// const removeSpecies = (array, element) => {
//     const index = array.find(elem => elem.species === element);
//     const indexSpecies = array.indexOf(index);
//     array.splice(indexSpecies, 1);
// }

// const result = fishProducts.filter(elem => {
//     return elem.species == "Corvina"
// });

// removeSpecies(fishProducts, "Hering");


































// const fishProducts = [
//     { species: 'Corvina', weight: 18, pricePerKg: 100 },
//     { species: 'Luvina', weight: 1.6, pricePerKg: 250 },
//     { species: 'Bacalao', weight: 32, pricePerKg: 60 },
//     { species: 'Tuna', weight: 450, pricePerKg: 1000 },
//     { species: 'Tuna', weight: 420, pricePerKg: 1000 },
//     { species: 'Corvina', weight: 21, pricePerKg: 100 },
//     { species: 'Corvina', weight: 23, pricePerKg: 100 },
//     { species: 'Herring', weight: 0.03, pricePerKg: 4 },
//     { species: 'Luvina', weight: 1.4, pricePerKg: 250 },
//     { species: 'Tuna', weight: 390, pricePerKg: 1000 },
//     { species: 'Luvina', weight: 18, pricePerKg: 100 },
//     { species: 'Bacalao', weight: 28, pricePerKg: 60 },
//     { species: 'Corvina', weight: 17, pricePerKg: 100 },
//     { species: 'Herring', weight: 0.03, pricePerKg: 4 },
// ];

// const tunaResult = fishProducts.filter(elem => (elem.species == 'Tuna'));
// const luvinaResult = fishProducts.filter(elem => (elem.species == 'Luvina'));
// const corvinaResult = fishProducts.filter(elem => (elem.species == 'Corvina'));
// const bacalaoResult = fishProducts.filter(elem => (elem.species == 'Bacalao'));
// const filterFishBySpecies = fishProducts.filter(elem => elem.species);

// fishProducts.slice(8, 1);

// console.log(fishProducts);

// // console.log(tunaResult);
// // console.log(luvinaResult);
// // console.log(corvinaResult);
// // console.log(bacalaoResult);
