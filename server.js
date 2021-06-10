const express = require('express')
const serverStatic = require('serve-static');
const path = require('path')
const cors = require('cors')
const mysql = require('mysql')
const {createPool} = require('mysql')
const bodyParser = require('body-parser');
const app = express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

const users = require('./server/api/users.js');
app.use('/api/users', users);

const tasks = require('./server/api/tasks.js');
app.use('/api/tasks', tasks);

app.use(express.static(__dirname + '/dist'));
const port = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production'){
    //Set static folder
    app.use(express.static(__dirname + '/dist'));
    app.get(/^((?!(api)).)*$/, 
    (req,res)=>res.sendFile(__dirname + '/dist/index.html'))
}




app.listen(port, ()=>{
    console.log(`Currently running on port ${port}`);
})