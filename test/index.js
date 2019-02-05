const { assert } = require('chai');
const {
  states,
  territories,
  associations,
  armedForces,
  all,
  lookup,
  reverseLookup,
} = require('../dist');

describe('valdiate data sources', function() {
  it('should have 51 states', function() { // DC is in the 'state' group
    assert.equal(Object.keys(states).length, 51);
  });

  it('should have 5 territories', function() {
    assert.equal(Object.keys(territories).length, 5);
  });

  it('should have 3 associations', function() {
    assert.equal(Object.keys(associations).length, 3);
  });

  it('should have 3 armed forces designations', function() {
    assert.equal(Object.keys(armedForces).length, 3);
  });

  it('should have 62 items in total', function() {
    assert.equal(Object.keys(all).length, 62);
  });

  it('should have all uppercase codes', function () {
    for (const code of Object.keys(all)) {
      assert.equal(code, code.toUpperCase());
    }
  });
});

describe('it should lookup data', function() {
  it('should lookup codes in each group', function() {
    assert.equal(lookup('ny'), 'New York');
    assert.equal(lookup('PR'), 'Puerto Rico');
    assert.equal(lookup('PW'), 'Palau');
    assert.equal(lookup('AP'), 'Armed Forces Pacific');
  });

  it('should reverse lookup codes in each group', function() {
    assert.equal(reverseLookup('District of Columbia'), 'DC');
    assert.equal(reverseLookup('Northern Mariana Islands'), 'MP');
    assert.equal(reverseLookup('Federated States of Micronesia'), 'FM');
    assert.equal(reverseLookup('Armed Forces Europe, the Middle East, and Canada'), 'AE');
  });

  it('should not matter if what case the input is in', function() {
    assert.equal(lookup('mA'), 'Massachusetts');
    assert.equal(reverseLookup('MASSACHUSETTS'), 'MA');
  });
});
