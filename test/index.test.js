import assert from 'assert';
//import one function
import { calc } from '../functions.js';

describe('calc()', function(){
  it('Should summarize the values in the string', function(){
    assert.equal(calc("1+1"), 2);
  });
});
