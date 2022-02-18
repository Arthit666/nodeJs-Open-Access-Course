const express = require('express');
const app = express();
const debug = require('debug')
const morgan = require('morgan')
const chalk = require('chalk')
const port =3000;
const path = require('path');



app.use(morgan('combined'));
app.use(express.static(path.join(__dirname,'/public/')))

app.get('/',(req,res)=>{
    res.send('hello')

})
app.listen(port,()=>{
  console.log('listening on port:'+ chalk.green(port));
})