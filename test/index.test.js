import assert from 'assert';
//import one function
import { calc } from '../functions.js';

describe('calc()', function(){
  it('Test mathematicao expression', function(){
    assert.equal(calc("1+1"), 2);
  });
  it('Test if .match accepts undefined', function() {
    assert.equal(calc(undefined), "error");
  });
  it('Test if .match accepts null', function() {
    assert.equal(calc(null), "error");
  });
  it('Test if .match accepts letters', function() {
    assert.equal(calc("a+b"), "a+b");
  });
  it('Test if .match accepts multiple operators', function() {
    assert.equal(calc("1++1"), "1++1");
  });
});
