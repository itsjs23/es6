// Arrow Function systax 

const names = ['jack' , 'jenna' , 'brian'];

const fullNames =  names.map(function(name){
	return `${name} denial`;
});

const fullNames2 =  names.map((name) => {
	return `${name} denial`;
});

// explicit return
const fullNames3 =  names.map(name => {
	return `${name} denial`;
});


// implicit return	
const fullNames4 =  names.map(name =>  `${name} denial`);

// implicit return	
const fullNames5 =  names.map(() => `denial`);


// sayName()); // ReferenceError: sayName is not defined
// function expression 
const sayName =  (name) => { console.log(`{name}`); } // not hoisited


sayGoodBuy(); // good buy
// funtion declartion
function sayGoodBuy(){
	console.log('good buy');
}





// 2.........


const race = '100m race';
const winners = ['jack', 'jeena', 'denial'];
const win = winners.map((name, i) => ({ name:name, race, place:i+1 }) ) ;
console.table(win); 


// 3............

const ages = [34,5,6,77,89,90,65,45,67,60];
const seniorCitizen = ages.filter((age) => (age >= 60));
console.log(seniorCitizen);






