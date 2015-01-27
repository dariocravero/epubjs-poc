/**
 * @jsx React.DOM
 */

var React   = require('react');

var Toc  = React.createClass({
  propTypes: {
    book:         React.PropTypes.object,
    goToChapter:  React.PropTypes.func
  },
  getInitialState: function() {
    return {
      toc: []
    };
  },
  componentDidMount: function() {
    this.props.book.getToc().then(function(toc) {
      this.setState({
        toc: toc
      });
    }.bind(this));
  },
  render: function() {
    var chapters = this.state.toc.map(function(section) {
      //  onClick={this.props.goToChapter(section.id)}
      return (
        <li>{section.label}</li>
      );
    }.bind(this));

    if (this.state.toc.length) {
      return (
        <nav>
          <ul>{chapters}</ul>
        </nav>
      );
    } else {
      return (
        <div>Loading...</div>
      );
    }
  }
});

module.exports = Toc;
