/* 
You can used for of with things that are iterable 
like dom collection , function argumets , string , array , map , set , genrators etc.

*/


const fruits = ['apple', 'banana', 'mango', 'orange'];

// 1.....
console.log('\n ---> while loop \n');
const itr = fruits.entries();
let entry = itr.next();
while(entry.done === false){
	console.log(entry.value[1]);
	entry = itr.next();
}


// 2.....
console.log('\n  ---> For of loop \n');
for(const fruit of fruits){
	console.log(fruit);
}

// 3....
console.log('\n  ---> For of loop with iterator \n');
for(const ft of fruits.entries()){
	const [index , value] = [ft];
	console.log(ft);
}

// 4....
console.log('\n  ---> For of loop with iterator again \n');
for(const [i, frt] of fruits.entries()){
	// console.log(i, frt);
	console.log(i+1, frt);
}


// 5.......

console.log('\n -- add numbers -- \n');
function addNumbers(){
	// -- way 1
	// const numbers = Array.from(arguments);
	// used reduce to calculate total 

	// -- way 2
	let total = 0;
	for(let num  of arguments){
		total += num;
	}
	console.log(total);
	return total;
	
	// -- way 3
	// debugger;
	// console.log(arguments.entries()); // give error
}

addNumbers(20,50,100,70, 450, 300);



// 6........

const name  = 'jhamman lal sharma';
for(let char of name){
	console.log(char);
}



// 7.......

// const ps = document.querySelectorAll('p');
// for(const pgh of ps){
// 	pgh.addEventListener('click', function(){
// 		console.log(this.textContent);
// 	})
// }


