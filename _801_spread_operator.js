// ... spread operator work with iterable 

const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
const specialty = ['Meatzza', 'Spicy Mama', 'Margherita'];

const pizzas = featured.concat(specialty);
console.log(pizzas);

let newPizzas = [];
newPizzas = newPizzas.concat(featured);
newPizzas.push('veg');
newPizzas = newPizzas.concat(specialty);
console.log(newPizzas);


/*
[...'jack'] = ['j','a','c','k']

const featured = ['Deep Dish', 'Pepperoni', 'Hawaiian'];
console.log(...featured); // o/p : Deep Dish Pepperoni Hawaiian

*/

const pizzasV2 = [...featured, 'veg', ...specialty];
console.log(pizzasV2);

// const pizzasV3 = pizzasV2; // reference to pizzasV2 if you made change to V2 or V3 reflect in both 
const pizzasV4 = JSON.parse(JSON.stringify(pizzasV2));
const pizzasV5 = [].concat(pizzasV2);
const pizzasV6 = [...pizzasV2];
console.log('n ______copy array_____ \n')
console.log(pizzasV4, pizzasV5,  pizzasV6);


