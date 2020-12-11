//express is used to create server
const express=require('express');
//for cross origin we use cars..it used to connect from one platform to another
const cors=require('cors');
//it is used to convert output to json format
const bodyparser=require('body-parser');
const mysql=require('mysql');
const bearerToken=require('express-bearer-token');
const events=require('./event');

const connection=mysql.createConnection
({
    host     : 'localhost',
    port     :  3306,
    user     : 'root',
    password : 'root',
    database : 'chatbot',
});

connection.connect();

const port=8092;

const app=express()
.use(cors())
.use(bodyparser.json())
.use(bearerToken())
.use(events(connection));

//it is gonna check whether everything is true or not
app.listen(port, () => {
console.log(`Express server listening on port ${port}`);
});