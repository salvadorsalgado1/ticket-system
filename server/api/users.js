const express = require('express');
const mysql = require('mysql');

const router = express.Router();

const db = mysql.createPool({
    connectionLimit:10,
    host:'us-cdbr-east-04.cleardb.com',
    user:'bc8ca59738c91f',
    database:'heroku_a1f94ad863c7cba',
    password:'1f5ca930'
  })


router.get('/', (req, res)=>{
    const getUsers = 'SELECT * FROM heroku_a1f94ad863c7cba.users;';
    db.query(getUsers, (err, result)=>{
        res.send(result);
    })
})

router.post('/create', (req, res)=>{

     const createUser = 'INSERT INTO heroku_a1f94ad863c7cba.users (user_id, firstName, position, positionImg) VALUES \
     (?, ?, ?, ?);';
   const user_id = req.body.user_id;
   const firstName = req.body.firstName;
   const position = req.body.position;
   const positionImg = req.body.positionImg;
    
    db.query(createUser, [user_id, firstName, position, positionImg], (err, result)=>{
        res.send(result);
     })
})

module.exports = router;