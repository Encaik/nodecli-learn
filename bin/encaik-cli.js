#!/usr/bin/env node
let color = require("./color");
let encaik = require("../src/index");
let optimist = require("optimist");
let option = optimist
  .usage("瞎几把使。\nUsage: motime <commond> [option]")
  .boolean("v")
  .alias("v", "version")
  .describe("v", "查看版本号")

  .boolean("news")
  .describe("news", "获取新闻")

  .string("book")
  .describe("book", "获取小说")

  .boolean("c")
  .alias("c", "color")
  .describe("c", "查看色彩模式")

  .boolean("h")
  .alias("h", "help")
  .describe("h", "帮助信息");
let argv = option.argv;
let argvs = argv._;
if (argv.v || argv.version) {
  console.log("version 1.0.0");
} else if (argv.h || argv.help) {
  optimist.showHelp((fn = console.log));
} else if (argv.c || argv.color) {
  console.log(color("black", "white", "白底黑字"));
} else if (argv.news) {
  encaik.getNews();
} else if (argv.book) {
  encaik.getBook(argv.book);
} else if (argvs.length === 0) {
  console.log(color("black", "blue", "run"), "encaik");
  encaik();
  console.log(color("black", "red", "error"), "not found");
  console.log(color("black", "green", "OK"), "just try it!");
}
