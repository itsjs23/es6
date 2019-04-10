const first = 'jhamman';
const last = 'sharma';
const age = 28;

const user = { 
	firstName: first,
	last,
	age,
	hobby: ['leaning', 'hacking', 'expermenting'] 
};
console.log(user);

const model = {
	// create: function(){
	create(selector){

	},
	// open: function(){
	open(content){

	},
	// close: function(){
	close(message){

	}
};



// 2..........

function invertColor(color){
	return '#'+("000000" + (0xFFFFFF ^ parseInt(color.substring(1),16)).toString(16)).slice(4);
}

const key = 'pocketColor';
const value = '#ffc600';

const tshirt = {
	[key]: value,
	[`${key}Opposite`]: invertColor(value)
};

console.log(tshirt);

// 3......

const keys = ['size', 'color', 'weight'];
const values = ['medium', 'red', 20];

const shirt = {
	[keys.shift()]: values.shift(),
	[keys.shift()]: values.shift(),
	[keys.shift()]: values.shift()
};

console.log(shirt);


const keysV2 = ['size', 'color', 'weight'];
const valuesV2 = ['medium', 'red', 20];

const shirtV2 = {};
for(let i=0; i < keysV2.length ; i++){
	shirtV2[keysV2[i]] = valuesV2[i];
}

console.log(shirtV2);

