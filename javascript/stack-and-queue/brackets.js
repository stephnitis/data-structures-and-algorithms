'use strict';

// const {Queue} = require('./index');
// const {Stack} = require('./index');

function validateBrackets(string){
  const stack = [];
  const validBrackets = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  };

  for (const char of string) {
    if(!validBrackets[char]){
      stack.push(char);
    }
    else if(stack.pop() !== validBrackets[char]){
      return false;
    }
  }
  return stack.length === 0;

}

console.log(validateBrackets('let(me) test{this} code[here]'));
