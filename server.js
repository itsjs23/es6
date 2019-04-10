'use strict';
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const port = process.env.PORT || 8000;
const mimes = {
	'.htm' : 'text/html',
	'.css' : 'text/css',
	'.js' : 'text/javascript',
	'.gif' : 'image/gif',
	'.jpg' : 'image/jpeg',
	'.png' : 'image/png',
	'.ico' : 'image/x-icon'

};

function fileAccess(filepath){
	return new Promise((resolve, reject) => {
		fs.access(filepath, fs.F_OK, (err) => {
		});
	});
}

function webServerPromisify(){

}


function webServer(req, res){
	let baseURI = url.parse(req.url);
	let filePath = __dirname + (baseURI.pathname === '/' ? '/index.htm' : baseURI.pathname);
	console.log(filePath); 
	// fs.access(filePath, fs.F_OK | fs.R_OK, )
	fs.access(filePath, fs.F_OK, (err) => {
		if(err){
			res.writeHead(404);
			res.end('Content Not Found');
		}

		fs.readFile(filePath, (err, content) => {
			if(err){
				res.writeHead(500);
				res.end('Server Could Not Read the requested file');
			}

			let contentType = mimes[path.extname(filePath)]
				if(!contentType){
					contentType = 'text/html';
				}
			res.writeHead(200, {'Content-type':contentType });
			res.end(content, 'utf-8');
		});
	});
}

http.createServer(webServer).listen(port,() => {
	console.log(`server running on port ${port}`);
});

