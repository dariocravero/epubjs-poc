// var ePub = require('../../node_modules/epubjs/build/epub.js');

function Book(path) {
  this.book = ePub(path, {
    height:   window.innerHeight,
    spreads:  false,
    width:    window.innerWidth
  });

  return this;
}

Book.prototype.getToc   = function() {
  return this.book.getToc();
}
Book.prototype.nextPage = function() {
  this.book.nextPage();
  return this;
}
Book.prototype.renderTo = function(domEl) {
  return this.book.renderTo(domEl);
}
Book.prototype.prevPage = function() {
  this.book.prevPage();
  return this;
}

module.exports = Book;
