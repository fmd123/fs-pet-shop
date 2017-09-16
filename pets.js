'use strict'

const fs = require('fs');
const path = require('path');

//const create = require('./create')

let cmd = process.argv[2];

if(cmd === undefined){
  console.error("Usage: node pets.js [read | create | update | destroy]");
  process.exit(1);
}

if(cmd ==='read'){
  fs.readFile('pets.json', (err, data) => {
    if(err){
      throw err
    } else{
      let i = Number.parseInt(process.argv[3],10);
      let petArr = JSON.parse(data);
      if(Number.isNaN(i)){
        console.log(petArr);
        process.exit(0);
      }else if(i<0||i>=petArr.length){
        console.log('petArr', petArr.length);
        console.error("Usage: node pets.js read INDEX")
        process.exit(1);
      } else if(i !== undefined){
        console.log(petArr[i]);
        process.exit(0);
      }
    }
  });//end of callback


}//end of read conditional

// if(cmd ==='create'){
//   console.log('create it');
// }
