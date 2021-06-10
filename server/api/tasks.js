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
    const getTasks = 'SELECT * FROM heroku_a1f94ad863c7cba.tasks;';
    db.query(getTasks, (err, result)=>{
        res.send(result);
    })
})

router.post('/create', (req, res)=>{
    const id = req.body.id;
    const taskTitle = req.body.taskTitle;
    const urgency = req.body.urgency;
    const assigned = req.body.assigned;
    const description = req.body.description;



    const createTask = 'INSERT INTO heroku_a1f94ad863c7cba.tasks \
    (task_id, task_title, priority, description, user_id) VALUES \
    (?, ?, ?, ?, ?);';
   
   
   db.query(createTask, [id, taskTitle, urgency, description, assigned], (err, result)=>{
       res.send(result);
    })  
})

module.exports = router;