import assert from 'assert';
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
  });
});
