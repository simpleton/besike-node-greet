
func = require("../coffee2js/index.js")
parseArgs = require('minimist')

module.exports = () ->
  args = parseArgs(process.argv.slice(2))
  console.log(func.greet_drink(args._[0],args.drink));
