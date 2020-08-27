#!/usr/bin/env node
let color = require("./color");
let encaik = require("../src/index");
let argvs = process.argv.slice(2);
if (argvs.length === 0) {
  encaik();
}
if (argvs.indexOf("-v") > -1 || argvs.indexOf("--version") > -1) {
  console.log("version 1.0.0");
}
if (argvs.indexOf("-h") > -1 || argvs.indexOf("--help") > -1) {
  console.log(
    `
    encaik                  run encaik
    encaik -v/--version     get version of encaik
    encaik -h/--help        help
    `,
  );
}
if (argvs.indexOf("-c") > -1 || argvs.indexOf("--color") > -1) {
  console.log(color("black", "white", "白底黑字"));
}
