const express = require('express');
const appl = express();
const http = require("http");
const pug = require('pug');
const logger = require('morgan');
const path = require('path');


appl.set('views', path.join(__dirname,'views'));
appl.set('view engine', 'pug');

appl.use(logger('dev'));
appl.use(root);

appl.listen( 4242, ()=>{
  console.log(`My first connection http://127.0.0.1:4242`);
  });
