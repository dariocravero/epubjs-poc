var Rce       = require('./components/rce.react'),
    React     = require('react');
window.React  = React;

React.render(
  <Rce bookPath='/ebooks/demo/' />,
  document.getElementById('rce')
);
