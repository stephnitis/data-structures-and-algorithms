'use strict';

// const {Queue} = require('./index');
// const {Stack} = require('./index');

// function validateBrackets(string){
//   const stack = [];
//   const validBrackets = {
//     '(' : ')',
//     '{' : '}',
//     '[' : ']'
//   };

//   for (const char of string) {
//     if(!validBrackets[char]){
//       stack.push(char);
//     }
//     else if(stack.pop() !== validBrackets[char]){
//       return false;
//     }
//   }
//   return stack.length === 0;

// }

// console.log(validateBrackets('let(me) test{this} code[here]'));

function bracketMatcher(string){
  const stack = [];
  for(let i = 0; i < string.length; i ++){
    if (string[i] === '(' ){
      stack.push( '(' );
    } else if (string[i] === ')'){
      if(stack.length === 0){
        return false;
      } else {
        stack.pop();
      }
    }
  }
  return stack.length === 0 ? true : false;
}

console.log(bracketMatcher('(hi) i am(true)'));
