'use strict'

const fs = require('fs');
const yargv = require('yargs')
const path = require('path');

//the path module
const petsPath = path.join(__dirname, 'pets.json');
//the path to pets.json (& create the file if needed?)

//first argument of process.argv after the basics will be the command
let cmd = process.argv[2];

if (cmd === undefined) {
  console.error("Usage: node pets.js [read | create | update | destroy]");
  process.exit(1);
}

if (cmd === 'read') {
  fs.readFile('pets.json', (err, data) => {
    if (err) {
      throw err
    } else {
      let i = Number.parseInt(process.argv[3], 10);
      let petArr = JSON.parse(data);
      if (Number.isNaN(i)) {
        console.log(petArr);
        process.exit(0);
      } else if (i < 0 || i >= petArr.length) {
        console.error("Usage: node pets.js read INDEX")
        process.exit(1);
      } else if (i !== undefined) {
        console.log(petArr[i]);
        process.exit(0);
      }
    }
  }); //end of callback
} //end of read conditional

if (cmd === 'create') {
  fs.readFile(petsPath, (err, data) => {
    if (err) {
      throw err;
    }

    //take data inside pets.json file & parse & put into pets const
    const pets = JSON.parse(data);
    //take input and make consts
    const age = Number.parseInt(process.argv[3]);
    const kind = process.argv[4];
    const name = process.argv[5];
    console.log(pets);
    console.log(typeof age);
    console.log(kind);
    console.log(name);
    //check for validity/existence
    if (Number.isNaN(age) || kind === undefined || name === undefined) {
      console.error("Usage: node pets.js create AGE KIND NAME");
      process.exit(1);
    }
    //make the pet object and put into pets array
    const pet = {
      age,
      kind,
      name
    };
    pets.push(pet);
    //turn into a JSON string
    const petsJSON = JSON.stringify(pets);

    //write the new petsJSON to the pets.json file
    fs.writeFile(petsPath, petsJSON, (err) => {
      if (err) {
        throw err
      }
      console.log(pet);
    }); //end of write
  }); //end of read

} //end of create conditional

//fill these in later for bonus:

// if (cmd === 'update') {
//   console.log('update it');
// }
//
// if (cmd === 'delete') {
//   console.log('delete it');
// }
