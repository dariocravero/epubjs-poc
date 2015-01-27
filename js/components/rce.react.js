/**
 * @jsx React.DOM
 */

var Book  = require('../book'),
    Toc   = require('./toc.react'),
    React = require('react');

var Rce     = React.createClass({
  propTypes: {
    bookPath: React.PropTypes.string
  },
  getInitialState: function() {
    return {
      book: window.RceBook = new Book(this.props.bookPath)
    };
  },
  componentDidMount: function() {
    this.state.book.renderTo(this.getDOMNode().querySelector('#content'));
  },
  goToChapter: function(url) {
    this.state.book.goto(url);
  },
  handleNext: function() {
    this.state.book.nextPage();
  },
  handlePrevious: function() {
    this.state.book.prevPage();
  },
  render: function() {
    return (
      <div>
        <Toc    book={this.state.book} goToChapter={this.goToChapter} />
        <button onClick={this.handlePrevious}>Previous</button>
        <button onClick={this.handleNext}>Next</button>
        <div    id='content'></div>
      </div>
    );
  }
});

module.exports = Rce;
