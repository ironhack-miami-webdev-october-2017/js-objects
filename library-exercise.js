var book1 = {
  title: 'Dune',
  author: 'Frank Herbert',
  isbn: '0441172717',
  category: 'Science Fiction'
};

var book2 = {
  title: 'Nonviolent Communication: A Language of Life',
  author: 'Marshall B. Rosenberg',
  isbn: '9781892005038',
  category: 'Self-Help'
};

var user = {
  name: 'Nizar',
  id: 42
};

user.books = [ book1, book2 ];

var library = [ user ];

var book3 = {
  title: 'Kingdom Come',
  author: 'Mark Waid',
  isbn: '1401220347',
  category: 'Comics'
};

library[0].books.push( book3 );

console.log(user.name + ' Books:');
user.books.forEach(function (oneBook) {
            // - Dune by Frank Herbert
  console.log('- ' + oneBook.title + ' by ' + oneBook.author);
});
