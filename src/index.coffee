module.exports.greet =
  greet = (name) ->
    return "hello, " + name

module.exports.greet_drink =
  greet_drink = (name, drunk) ->
    if drunk
      return "hello " + name + ", you look sexy today"
    else
      return "hello, " + name

      
