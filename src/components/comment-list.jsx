'use strict';
const React = require('react');
const Comment = require('./comment');
const _ = require('lodash');

module.exports = React.createClass({
    render: function() {
        let commentNodes = _.map(this.props.data, comment => {
            return(
                <Comment author={comment.author} key={comment.id}>
                    {comment.text}
                </Comment>
            );
        });
        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});
