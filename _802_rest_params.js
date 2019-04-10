// ... both used for spreading value and joining value to an array
// Rest parms does oppsite of spread 

// 1......

function convertCurrency(rate, amt1, amt2, amt3, amt4){}

function convertCurrencyRestParams(rate, ...amts){
	return amts.map(amt => amt * rate );
}

function convertCurrencyRestParamsV2(rate, tax, tip, ...amts){
	return amts.map(amt => amt * rate );
}

const amounts = convertCurrencyRestParams(1.54, 10, 20, 40, 50, 150, 100);
console.log(amounts);



// 2.......

const runner = ['jhamman sharma', 'Id1101', 5.5, 6, 12, 8];
const [name, id, ...krRuns] = runner;
console.log(name, id,krRuns);

// 3.......

const team = ['caption', 'assistant', 'player1', 'player2', 'player3'];
const [caption, assistant, ...players] = team;
console.log(caption, assistant, players);



