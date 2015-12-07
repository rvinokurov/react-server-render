'use strict';
let express = require('express');
let router = express.Router();

let ReactDOMServer = require('react-dom/server');
let React = require('react');

let  Main = require('../components/main');
let  _  = require('lodash');

const getData = () => {
    let data = [];
    _.each(_.range(1000), i =>  {
        data.push({
            id: i,
            author: `Pete Hunt ${Math.random()}`,
            text: `This is one comment ${Math.random()}`
        });
    });
    return data;
};

router.get('/', function(req, res, next) {
    let start = 0, data = getData();
    start = Date.now();
    let html = ReactDOMServer.renderToStaticMarkup(
        <Main data={data}/>
    );
    console.log('render time ms', Date.now() - start);
    res.render('layout', {title: 'Express', html: html});

});


module.exports = router;
