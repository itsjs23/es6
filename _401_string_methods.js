

// 1....... startWith()

function startsWith(str, searchTxt , startAfterChar=0){
  // case sensitive 
  return str.startsWith(searchTxt,startAfterChar);
}

// console.log(startsWith('Jhamman is here','Jhamman')); // true
// console.log(startsWith('Jhamman is here','jhamman')); // false used regex for that match
// console.log(startsWith('Jhamman is here','is',8)); // true
// console.log(startsWith('Jhamman is here','is',9)); // false


// 2....... endWith()
function endsWith(str, searchTxt , lookIntoMaxCharFromStart){
  // case sensitive 
  if(lookIntoMaxCharFromStart){
  	return str.endsWith(searchTxt,lookIntoMaxCharFromStart);
  }else{
  	return str.endsWith(searchTxt);
  }
}

// console.log(endsWith('Jhamman is here','here')); // true
// console.log(endsWith('Jhamman is here','Here')); // false used regex for that match
// console.log(endsWith('Jhamman is here','is',10)); // true
// console.log(endsWith('Jhamman is here','is',9)); // false



// 3....... includes()

function includes(str, searchTxt){
	// case sensitive
	return str.includes(searchTxt);
}


console.log(includes('Jhamman sharma is here ', 'sharma')); // true
console.log(includes('Jhamman sharma is here ', 'Sharma')); // false

// 4....... repeat()
function leftPad(str, length = 20){
	return `> ${' '.repeat(length-str.length)} ${str}`;
}

// console.log(leftPad('Hello'));
// console.log(leftPad('buy'));
// console.log(leftPad('Good day'));

