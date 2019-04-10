// Destructuring Arrays

// 1.......

const details = ['jhamman', 28, '"software developer"'];
// const name = details[0];
// const age = details[1];

const [name , age] = details;
const [ , , designation] = details;

console.log(name, age, designation);

const address = "D 302 Rajni Apt., Central Park , Nallasopara East, Dist-Plaghar , Maharashtra, pin code: 401209";
const [houseNumber, area, city, dist, state, ...otherParts] = address.split(',').map( addressPart => `"${addressPart.trim()}"`);
console.log(houseNumber, area, city, dist, state, otherParts);


const team = ['caption Jack', 'assistant jeena', 'player 1', 'player 2', 'player 3'];

const [caption, assistant, ...players] = team;
console.log(caption, assistant, players);


// 3......... swapping variable with destructring 

let inRing = 'Hulk Hogan';
let onSide = 'The Rock';

// let tmp = inRing ; 
// inRing = onSide;
// onSide = tmp;

console.log(inRing, onSide);
[inRing, onSide] = [onSide, inRing];


tmp = null; // avilable for garbage collection
// tmp = undefined; // avilable for garbage collection
// tmp = (function(){}()); // o/p undefined


console.log(inRing,onSide, tmp);





/*
The delete operator removes a property from an object. It cannot remove a variable. So the answer to the question depends on how the global variable or property is defined.

(1) If it is created with var, it cannot be deleted.

For example:

var g_a = 1; //create with var, g_a is a variable 
delete g_a; //return false
console.log(g_a); //g_a is still 1

(2) If it is created without var, it can be deleted.

g_b = 1; //create without var, g_b is a property  (lookup in LexicalEenvironment  is the ("global environment") bound to global object)
delete g_b; //return true
console.log(g_b); //error, g_b is not defined

*/

