#!/usr/bin/env node
var func = require("../coffee2js/index.js")
var parseArgs = require('minimist')

var args = parseArgs(process.argv.slice(2))
console.log(func.greet_drink(args._[0],args.drink));
