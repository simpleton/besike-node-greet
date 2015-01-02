
var greet = require('../coffee2js/index')
describe('greet', function() {
  it("is a dummy success case", function() {
    expect(1).to.eql(1);
  })

  it("should greet a person by name", function() {
    expect(greet.greet("sim")).to.eql("hello, sim")
  })

  it("should greet a person flirtatiously if drunk", function() {
    expect(greet.greet_drink("sim", true)).to.eql("hello sim, you look sexy today")
  })
})
