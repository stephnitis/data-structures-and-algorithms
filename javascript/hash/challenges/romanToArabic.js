'use strict';

function romanToArabic(number) {
  //implement romanNumber table here
  //must be in descending order for this code to work though ???
  let romanNumber = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let roman = '';

  for (let key in romanNumber) {
    while (number >= romanNumber[key]) {
      roman += key;
      number -= romanNumber[key];
    }
  }
  return roman;

}

console.log(romanToArabic(25));
