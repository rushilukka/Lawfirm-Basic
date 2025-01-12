const express = require('express');
let app = express();
let mongos = require('mongoose');
let connect_mongoDB = require('./db/connection');

 
connect_mongoDB('mongodb+srv://rushilukka:123@cluster0.q7fkxwi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')

.then(console.log('Connected'))
.catch(console.log('Not able to connect'))

app.listen(5000,()=>{console.log('listening on port 5000');});

