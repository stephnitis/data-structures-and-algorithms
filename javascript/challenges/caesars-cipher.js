// The Caesar Cipher technique is one of the earliest and simplest methods of encryption technique. It’s simply a type of substitution cipher, i.e., each letter of a given text is replaced by a letter with a fixed number of positions down the alphabet. For example with a shift of 1, A would be replaced by B, B would become C, and so on. The method is apparently named after Julius Caesar, who apparently used it to communicate with his officials.

// Thus to cipher a given text we need an integer value, known as a shift which indicates the number of positions each letter of the text has been moved down.
// The encryption can be represented using modular arithmetic by first transforming the letters into numbers, according to the scheme, A = 0, B = 1,…, Z = 25.

// function caesarsCipher(string){
//   let solved = '';
//   for(let i = 0; i < string.length; i++){
//     let asciiNumber = string[i].charCodeAt();
//     if(asciiNumber >= 65 && asciiNumber >= 90){
//       solved += string.fromCharCode(asciiNumber + 13);
//     }
//   }
//   return solved;
// }

// console.log(caesarsCipher('Q'));

function caesarsCipher(string, number){
  let lowerCaseString = string.toLowerCase();
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newString = '';

  for( let i = 0; i < lowerCaseString.length; i++){
    let currentLetter = lowerCaseString[i];
    if(currentLetter === ' '){
      newString += currentLetter;
      continue;
    }
    let currentIndex = alphabet.indexOf(currentLetter);
    let newIndex = currentIndex + number;
    if(newIndex > 25) {
      newIndex = newIndex - 26;
    }
    if(newIndex < 0) {
      newIndex = newIndex + 26;
    }
    if(string[i] === string[i].toUpperCase()){
      newString += alphabet[newIndex].toUpperCase();
    }
    else newString += alphabet[newIndex];
  }
  return newString;
}

console.log(caesarsCipher('rnkud ld', 1));

// charCodeAt gives you the ascii value of a letter
