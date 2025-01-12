
let mongos = require('mongoose');
let connectDB = async(url) =>{
   await mongos.connect(url,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(()=>{console.log('connected...')})
    .catch((err)=>{console.log('err')})
}
module.exports = connectDB;
