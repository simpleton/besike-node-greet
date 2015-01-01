module.exports.greet = function greet(name) {
  return "hello, " + name
}

module.exports.test = function test(name) {
  return "test, " + name
}

module.exports.greet_drink = function greet(name, drunk) {
  if (drunk) {
    return "hello " + name + ", you look sexy today";
  } else {
    return "hello, " + name;
  }
}
