'use strict';

// const LinkedList = require('../linked-list/index');
// const Hash = require('../index');

let test = "Ravi, Had been! 'saying' that he had! been there.";

var regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

/**
 * Remove all punctuation from a string.
 * @param string - The string to remove punctuation from.
 * @returns The string with all punctuation removed.
 */
function removePunctuation(string) {
  return string.replace(regex, '');
}

function first_repeating_word(string) {

  let puncString = removePunctuation(string);

  let lowString = puncString.toLowerCase();

  let word_count = new Map();

  for (let i of lowString.split(' ')) {

    if (word_count.has(i)) {
      word_count.set(i, word_count.get(i) + 1);
    }
    else word_count.set(i, 1);

    if (word_count.get(i) > 1)
      return i;
  }

  return 'No word is being repeated';
}

console.log(first_repeating_word(test));
