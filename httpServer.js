'use strict';
let fs = require('fs')
const path = require('path');
const petsPath = path.join(__dirname, 'pets.json');
const http = require('http');
const port = process.env.PORT || 8000;
//process.env reads environment variables in shell

//create an instance of class server
const server = http.createServer((req, res) => {
  //if GET && pets url
  if (req.method === 'GET' && req.url === '/pets') {
    fs.readFile(petsPath, 'utf8', (err, petsJSON) => {
      if (err) {
        console.error("what?");
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error')
      }

      res.setHeader('Content-Type', 'application/json');
      res.end(petsJSON);
    }); //end of fs. readFile callback
  } else if (req.method === 'GET' && req.url === '/pets/0') {
    fs.readFile(petsPath, 'utf8', (err, petsJSON) => {
      if (err) {
        console.error("what?");
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error')
      }
      var pets = JSON.parse(petsJSON);
      var petJSON = JSON.stringify(petsPath[0]);
      res.setHeader('Content-Type', 'application/json');
      res.end(petsJSON);
    });//end of fs.readFile
  } else if (req.method === 'GET' && req.url === '/pets/1') {
    fs.readFile(petsPath, 'utf8', (err, petsJSON) => {
      if (err) {
        console.error("what?");
        res.statusCode = 500;
        res.setHeader('Content-Type', 'text/plain');
        return res.end('Internal Server Error')
      }
      var pets = JSON.parse(petsJSON);
      var petJSON = JSON.stringify(petsPath[1]);
      res.setHeader('Content-Type', 'application/json');
      res.end(petsJSON);
    });//end of fs.readFile
  }



}); //end of http.createServer callback



server.listen(port, function() {
  console.log('Listening on port', port);
});
module.exports = server;
