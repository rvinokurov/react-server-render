'use strict';
// const React = require('react');
const React = require('../fast-react/index.js');
module.exports = React.createClass({
    render: function() {
        return (
            <div className="comment">
                <h2 className="commentAuthor">
                    {this.props.author}
                </h2>
                {this.props.children}
                <hr />
            </div>

        );
    }
});
