'use strict';
//const React = require('react');
const React = require('../fast-react/index.js');
const CommentList = require('./comment-list');

module.exports = React.createClass({
    render: function() {
        return <CommentList data={this.props.data} />;
    }
});
