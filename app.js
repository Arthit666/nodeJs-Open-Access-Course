const express = require('express');
const app = express();
const debug = require('debug')
const morgan = require('morgan')
const chalk = require('chalk')
const port =3000;

app.use(morgan('combined'));

app.get('/',(req,res)=>{
    res.send('hello world1111')

})
app.listen(port,()=>{
  debug('listening on port:'+ chalk.green(port));
})