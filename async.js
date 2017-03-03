#!/usr/bin/env node

const { readFile } = require('fs');

let arg = process.argv[2];

if(arg) {
  readFile(arg, "", (err, data)=>{
    if(err) return console.error(err);
    process.stdout.write(`${data}`);
  })
} else {
  process.exit();
}
