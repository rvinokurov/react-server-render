'use strict';
const React = require('react');
const CommentList = require('./comment-list');

module.exports = React.createClass({
    render: function() {
        return <CommentList data={this.props.data} />;
    }
});
