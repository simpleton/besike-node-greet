// Generated by CoffeeScript 1.8.0
(function() {
  var greet, greet_drink;

  module.exports.greet = greet = function(name) {
    return "hello, " + name;
  };

  module.exports.greet_drink = greet_drink = function(name, drunk) {
    if (drunk) {
      return "hello " + name + ", you look sexy today";
    } else {
      return "hello, " + name;
    }
  };

}).call(this);