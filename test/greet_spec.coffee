greet = require('../coffee2js/index')

describe 'greet', ->
  it "should greet a person by name", ->
    expect(greet.greet("sim")).to.eql "hello, sim"

  it "should greet a person flirtatiously if drunk", ->
    expect(greet.greet_drink("sim", true)).to.eql("hello sim, you look sexy today")
