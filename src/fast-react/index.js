'use strict';
const _ = require('lodash');

let BaseComponent = function(props) {
    this.props = props;
}

module.exports = {
    createClass : function(obj) {
        // let cls = function(props) {
        //     this.props = props;
        // };
        // cls.prototype = _.extend(cls.prototype, obj);
        // console.log('cls', cls);
        return obj.render;
    },

    createElement : function() {
        let component = arguments[0];
        let props = {};
        let instance = null;
        let html = '';
        if(arguments[1]) {
            props = arguments[1];
        }

        if(arguments.length >= 2) {
            for(let i = 2,  l = arguments.length; i < l; i++) {
                html += arguments[i];
            }
        }

        if(typeof component === 'string')  {
            return '<' + component + '>' + html + '</' + component + '>';
        }
        props.children = html;
        return component.apply({props:props});
    },

    compile : function(component) {
        return component;
    }
};
