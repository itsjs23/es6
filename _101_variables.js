/* 

> var : only have function scope 
> let & const have block scope

> you can't declare same variable with 
  let & const in same scope

>  you can update the let variable value in same scope, but not redcalre it

> you can't change a value of 
const for primitive data types
and for object you can't change reference 
to that object .

> you can added new property to Object
or change existing value of a property

> let & const are not hoisted 
  so you have temporal dead zone 
  ex. if you access variable not declare 
  above it give you a refernce error	.



> used const by default 
> only used let if rebinding is  nedded 
> var shouldn't be used in es6



> function expression not hoisted on top for any var delcration used like (var, let or const)

*/


/******** var *********/
var width =  100;
var width  = 200; // redclare allow in same scope

if(true){
	var width  = 300; // redclare allow in same scope
}
console.log(width) ; //  300

for(var i = 1 ; i <= 10 ; i++){
	console.log(i); // 1,2,3 ...10

	setTimeout(function(){
		console.log(i); // 10,10,10....10
	},1000);
}


console.log(hiUser);// undefined , because variable and function are hoisited 
var hiUser = 'say Hi to users';








/******** let *********/
let x = 2; 
// let x = 2; // syntax error :  identifier has already defined.
if(true){
	let x = 3; // block scope its ok
}

console.log(x); // 2
x = 4;
console.log(x); // 4


for(let i = 1 ; i <= 10 ; i++){
	console.log(i); // 1,2,3 ...10

	setTimeout(function(){
		console.log(i); // 1,2,3 ...10
	},1000);
}



// temporal dean zone
console.log(helloUser);// refence error : helloUser is not defined
let helloUser = 'say Hello to users';









/******** const *********/

const key = 'loremipsum';
 // const key = '908jklk9990'; // syntax error :  Identifier 'key' has already been declared 
// key = 'jdklsd990809' ; // TypeError error : Assignment to constant variable.

const person = {
	name :'jack denial',
	age : 28
};

person.hobby = 'writing codes';
person.name = 'Jeena';

// person = {}; // TypeError error : Assignment to constant variable.
// const person = {}; // syntax error :  Identifier  has already been declared 

// to freeze object you can do this
const z = { name : 'jack'}
const jack = Object.freeze(z)
jack.name = 'denial';  // won't give you any error but won't update the value jack Object
consooe.log(jack); // {name: "jack"}
z.name = 'rama' ; // won't give you any error but won't update the value jack Object
consooe.log(z); // {name: "jack"}



// temporal dean zone
console.log(goodByUser);// refence error : helloUser is not defined
const goodByUser = 'say good by  to users';






/******** OTHER BLOCK SCOPE EXAMPLES ******/

// iife
(function(){
	var name ='jhamam';
}());

// create a iife kind of scope for let & const 
{ 
	const username = "jack";
	let password = '123';	
}
console.log(username); // ReferenceError: username is  not defined
console.log(password); // ReferenceError : password is not defined

