var React = require('react');
var TVTabWrapper = require('./TVTabWrapper');

//entrypoint for TV Schedule Tab when exported via gulp
React.render(<TVTabWrapper />, document.getElementById('TVTab'));
