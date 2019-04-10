
// 1 ..........

const person = {
	first : 'Jhamman',
	last : 'sharma',
	city: 'mumbai'
};

// const first = person.first;
// const last = person.lasts;

const {first, last} = person;

console.log(first);
console.log(last);


// 2..........
// Object Destructuring with variable renaming

const js = {
	first: 'jhamman',
	last: 'sharma',
	links: {
		social: {
			twitter: 'twitter link',
			facebook: 'facebook link'
		},
		web:{
			blog: 'blog link'
		}
	}
};


// const twitter = js.links.social.twitter;
// const facebook = js.links.social.facebook;

const { twitter, facebook:fb } = js.links.social;

console.log(twitter);
// console.log(facebook);
console.log(fb);




// 3.......... 
// Object Destructuring with default value

const setting = { port : 1600, env :'prodution'};

const {port=3000 , env= 'development' , host='localhost' } = setting;

console.log(port);
console.log(env);
console.log(host);



// 4......
// Object Destructuring with variable renaming & default value

const {w:width = 200, h:height = 500} = {w:250};
console.log(width);
console.log(height);



// 4......

function convertCurrency(amount){
	const converted = {
		USD: amount * 0.76, 
		GPB: amount * 0.53, 
		AUD: amount * 1.01, 
		MEX: amount * 13.30 
	};

	return converted;
}

const hundo = convertCurrency(100);

console.log(`
--------------------------------
------ Curreny Convertor -------
--------------------------------
`);

// console.log(hundo.USD);
// console.log(hundo.GPB);

// const {USD, AUD} = convertCurrency(100);
// console.log(USD, AUD);

const {USD, GPB, AUD, MEX} = convertCurrency(100);
console.log(USD, GPB, AUD, MEX);



// 5......

// argument come in same order they define 
function tipCalcArgsOrder(total, tip=0.15, tax = 0.13){
}

// argument come in same order they define 
// function tipCalc({total, tip=0.15, tax = 0.13} = {}){
function tipCalc({total = 100, tip=0.15, tax = 0.13} = {}){
	return ( total + (total * tip) + (total * tax) );
}

const bill = tipCalc({tip:.25, tax:0.15, total:2000});
const bill2 = tipCalc();
console.log(bill);
console.log(bill2);








