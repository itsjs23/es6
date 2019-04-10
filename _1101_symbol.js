/*

> Sevent Data Types 

	> Six primitives Type: 
		> Boolean
		> Null
		> Undefined
		> Number
		> String
		> Symbol (new in ECMAScript 6)

	> One Complex Data Type
	    > Object

*/


/* 
	> Symbol are unique and they avoid naming collision.
*/


const js = Symbol('js');
const person = Symbol('js');

console.log(js, person); // Symbol('js') Symbol('js')
console.log(js===person); // false
console.log(js==person); // false



const classRoom = {
	[Symbol('mark')]: { grade: 50, gender: 'male' }, 
	[Symbol('olivia')]: { grade: 80, gender: 'female' }, 
	[Symbol('olivia')]: { grade: 90, gender: 'female' }, 
};


// Symbol are enumerable so can't loop over them
// for(let person in classRoom){
// 	console.log(person);
// }


const syms = Object.getOwnPropertySymbols(classRoom);
const data = syms.map(sym => classRoom[sym]);
console.log(data);



