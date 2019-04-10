Array.prototype.shuffle = function(){
	let i = this.length, j , temp;
	if(i === 0){ return this; }
	while(--i){
		j = Math.floor(Math.random() * (i+1));
		temp = this[i];
		this[i] = this[j];
		this[j] = temp;
	}
	return this;
};


const fruits = ['apple', 'banana', 'mango', 'orange'];

// Types of for loops 
console.log('\n ----- Normal For Loop---- \n');
for(let i=0; i < fruits.length ; i++){
	console.log(fruits[i]);
}

console.log('\n ------ Foreach Loop ---- \n');
// You can't stop the iteration
fruits.forEach(fruit => {
	if(fruit == 'banana'){ return; }
	console.log(fruit)
});


console.log('\n ------ some Loop ---- \n');
// excepting true to break the loop
fruits.some(fruit => {
	if(fruit == 'banana'){ return true; }
	console.log(fruit)
});


console.log('\n ------ every Loop ---- \n');
// excepting false to break the loop
fruits.every(fruit => {
	if(fruit == 'banana'){ return false; }
	console.log(fruit)
	return true;
});



console.log('\n ------ for in Loop ---- \n');
// iterate over prototype things , property also
for(let index in fruits){
	console.log(fruits[index]);
}


console.log('\n ------ for of Loop ---- \n');
// can't loop over object : TypeError [Symbol.iterator]
for(let fruit of fruits){
	console.log(fruit);
}

console.log('\n ------ looping object using for of Loop ---- \n');
const apple = {
	color: 'red',
	size: 'medium',
	weight: 40,
	sugar: 10
};

for(const prop of Object.keys(apple)){
	console.log(apple[prop]);
}

console.log('\n------------\n');
for(const prop in apple){
	console.log(apple[prop]);
}







