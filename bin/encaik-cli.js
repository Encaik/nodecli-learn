#!/usr/bin/env node
let color = require("./color");
let encaik = require("../src/index");
let optimist = require("optimist");
let option = optimist
  .usage("瞎几把使。\nUsage: encaik <commond> [option]")
  .boolean("v")
  .alias("v", "version")
  .describe("v", "查看版本号")

  .boolean("c")
  .alias("c", "color")
  .describe("c", "查看色彩模式")

  .boolean("h")
  .alias("h", "help")
  .describe("h", "帮助信息");
let argv = option.argv;
let argvs = argv._;
if (argvs.length === 0) {
  console.log(color("black", "blue", "run"), "encaik");
  encaik();
  console.log(color("black", "red", "error"), "not found");
  console.log(color("black", "green", "OK"), "just try it!");
}
if (argv.v || argv.version) {
  console.log("version 1.0.0");
}
if (argv.h || argv.help) {
  optimist.showHelp((fn = console.log));
}
if (argv.c || argv.color) {
  console.log(color("black", "white", "白底黑字"));
}
