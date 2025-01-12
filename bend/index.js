const express = require('express');
const connDB = require('./DB/connection');
const BookingReq = require('./schema/BookingSchema')
// show pending req OR completed by doing same phone no. authencation
 
const bodyParser = require('body-parser'); // Import body-parser
const app = express();
const cors = require('cors');




app.use(bodyParser.json()); 

// conn('mongodb+srv://rushilukka315:123@cluster0.v9tpnnj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
// connDB('mongodb+srv://rushilukka:123@cluster0.q7fkxwi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
// conn('mongodb+srv://rushilukka:123@cluster0.q7fkxwi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
// .then(console.log('Connected'));//mongoDB link
app.use(cors());

let connect_mongoDB = require('./DB/connection');
// connect_mongoDB('mongodb+srv://rushilukka:123@cluster0.q7fkxwi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
connect_mongoDB('mongodb+srv://rushilukka315:123@cluster0.v9tpnnj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//connect_mongoDB('mongodb+srv://rushilukka315:<password>@cluster0.v9tpnnj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(console.log('Connected'))//127.0.0.1


app.get('/',(req,res)=>{
    const data = req.body ;
    console.log(data);
    console.log(req.ip);
    console.log(req.url);
    console.log('data');
    const obj  = {
        "req.body": req.body,
        "req.ip":req.ip,
        "req.url":req.url
    }
    res.send(JSON.stringify(obj));
  
})

app.post('/bookingDetails',async (req,res)=>{
    //  const {fname,lname,address,pno,assistancetype,appdate,apptime,description} = req.body;
    const obj = req.body;
    await BookingReq.insertMany(obj);
});

app.listen(5001,()=>{
    console.log('hello');
})

