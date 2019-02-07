import assert from 'assert';
//import one function
import { calc } from '../functions.js';

describe('calc()', function(){
  it('Test mathematicao expression', function(){
    assert.equal(calc("1+1"), 2);
  });
});
