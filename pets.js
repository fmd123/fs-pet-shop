'use strict'

const fs = require('fs');
const path = require('path');
const yargs = require('yargs');
const create = require('./create.js')


let cmd = process.argv[2];
let yargv = yargs.argv

if (cmd === "read") {
  fs.readFile('pets.json', (err, data) => {
    if (err) {
      console.error("Usage: node pets.js [read | create | update | destroy]");
      process.exit(1);
    } else {
      let i = Number.parseInt(process.argv[3], 10);
      let petArr = JSON.parse(data);
      if (Number.isNaN(i)) {
        console.log(petArr);
        process.exit(0);
        //entire array
      } else if (i < 0 || i >= petArr.length) {
        console.log("petArr", petArr.length);
        console.error("Usage: node pets.js read INDEX");
        process.exit(1);
      } else {
        console.log(petArr[i]);
        process.exit(0);
        //a single element of array
      }
    }
  });

  //the third argument to be used to access an individual object
  //check if a Number even exists...

} else if (cmd === "create") {
  fs.readFile('pets.json', (err, data) => {
    if (err) {
      console.error("Usage: node pets.js [read | create | update | destroy]");
      process.exit(1);
    } else {

      var pet = create.createPet(yargv.age, yargv.kind, yargv.name)
      console.log(typeof pet);
    }
    //make an pet object like this: { age: 7, kind: 'rainbow', name: 'fido' }
    //only when given all three elements will it create a newPet
    //yargv.age will be age
    //yargv.kind= kind
    //yargv.name= name


    // if(Number.isNaN){
    //   console.log("please enter a numberical age");
    //   process.exit;
    // }
  });
};
//parseInt will return either number or NaN
//en anglais... read the file pets.json. data is what is inside the pet.json file
//I originally had JSON.parse(pets.json) but that's wrong because parse wants a string not a file.

//next add an index (will be in process.argv[3]) so that can select only pets.json item that you want.
// $ node pets.js read 0
// { age: 7, kind: 'rainbow', name: 'fido' }
//
// $ node pets.js read 1
// { age: 5, kind: 'snake', name: 'Buttons' }
