import assert from 'assert';
<<<<<<< HEAD
//import one function
import {handleKeyPress, calc} from '../functions.js';

describe('checks if keydown', function() {
  it('type what key is down', function() {
    assert.equal(handleKeyPress(4),4);
  });
});

describe('calc()', function(){
  it('Should summarize the values in the string', function(){
    assert.equal(calc("1+1"), 2);
=======
import testfuncs from '../main.js';

describe('description', function() {
  it('description', function() {

  assert.equal(testfuncs.calc(), )
>>>>>>> master
  });
});
