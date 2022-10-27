'use strict';

const movies = require('./movies');



// examples for demo
const books = ['A Tale of Two Cities', 'Mary Poppins', 'Lord of the Rings'];

// sample:
// let sampleComparator = (a, b) => {
//   const nameA = a.name.toUpperCase(); // ignore upper and lowercase
//   const nameB = b.name.toUpperCase(); // ignore upper and lowercase
//   if (nameA < nameB) {
//     return -1;
//   }
//   if (nameA > nameB) {
//     return 1;
//   }

//   // names must be equal
//   return 0;
// };

// comparator for books:
function bookComparator(a, b) {
  const bookA = a.replace('A ', '');
  const bookB = b.replace('A ', '');

  if (bookA < bookB) return -1;
  if (bookA > bookB) return 1;
  return 0;

}

console.log(books);
books.sort(bookComparator);
console.log(books);

const standings = [
  { team: 'Lions', score: 4 },
  { team: 'Tigers', score: 1 },
  { team: 'Bears', score: 5 },
  { team: 'OhMy...', score: 3 },
];

//Demo:  stay tuned...

// what is a comparator?
// function that determines sort definitions



// Complete for Code Challenge 28
let helpSortYear = (a, b) => {

  if (a.year < b.year) {
    return -1;
  }
  if (b.year < a.year) {
    return 1;
  }
  return 0;

};

function sortYear(movies) {
  return movies.sort(helpSortYear);
}

// movies.sort(sortYear);
// console.log('Year Sort ----->', movies);

let helpSortTitle = (a, b) => {
  let titleA = a.title.replace('The ', '');
  let titleB = b.title.replace('The ', '');
  if (titleA < titleB) {
    return -1;
  }
  if (titleB < titleA) {
    return 1;
  }
  return 0;
};

function sortTitle(movies) {
  return movies.sort(helpSortTitle);
}

// movies.sort(sortTitle);
// console.log('Title Sort ----->', movies);

function inGenre(movies, genre) {
  return movies.filter(movie => movie.genres.includes(genre));
}

module.exports = { sortYear, sortTitle, inGenre };
