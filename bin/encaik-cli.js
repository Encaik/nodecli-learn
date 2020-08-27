#!/usr/bin/env node
let color = require("./color");
let encaik = require("../src/index");
let optimist = require("optimist");
let option = optimist
  .usage("瞎几把使。\nUsage: encaik <commond> [option]")
  .boolean("v")
  .alias("v", "version")
  .describe("v", "查看版本号")

  .boolean("h")
  .alias("h", "help")
  .describe("h", "帮助信息");
let argv = option.argv;
let argvs = argv._;
if (Object.keys(argv).length === 2 && argvs.length === 0) {
  encaik();
}
if (argv.v || argv.version) {
  console.log("version 1.0.0");
}
if (argv.h || argv.help) {
  optimist.showHelp((fn = console.log));
}
if (argvs.indexOf("-c") > -1 || argvs.indexOf("--color") > -1) {
  console.log(color("black", "white", "白底黑字"));
}
