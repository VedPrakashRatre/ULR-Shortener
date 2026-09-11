const express = require('express');
const Router = express.Router();
const {shorturl,geturl,getallurl} = require('../controller/controll');

Router.route('/').post(shorturl).get(getallurl);
Router.route('/:id').get(geturl);


module.exports = Router;