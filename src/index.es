'use strict';

import 'babel-polyfill'
import Koa from 'koa';
import mount from 'koa-mount';
import serve from 'koa-static';

const app = new Koa();


// serve static files from client directory
let directory = __dirname + '/../client/';
app.use(mount('/', serve(directory)));
console.log('serving files from ' + directory);


app.listen(3000);
console.log('listening on port 3000');
