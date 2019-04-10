const http = require('http');
const url = require('url');

const data = {
	name : 'jack',
	'address': 'D 302 Rajni Apt'
};

http.createServer((req, res) => {
	console.log(req.url);
	if(req.url == '/data'){
	res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    res.writeHead(200,{
    	'Content-type' : 'application/json'
    });
    console.log(data);
    res.end(JSON.stringify(data));
}else{
	res.end();
}
}).listen(3000);