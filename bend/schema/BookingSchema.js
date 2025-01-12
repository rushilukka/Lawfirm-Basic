const mongoose = require('mongoose');

let BookingSchema = new mongoose.Schema(
    {   
        bookingReqId:{
            type:Number,
            required:true
        },
        name:{
            type:String,
            required:true
        },
        address:{
            type:String,
            required:true
        },
        
        email:{
            type:String,
            required:true
        },
        pno:{
            type:Number,
            required:true
        },
        date:{
            type:Date,
            required:true
        },
        slot:{
            type:Number,
            required:true
        },
        assistanceType:{
            type:Number,
            required:true
        },
        brief:String
    }
)
 const BookingReqfun = mongoose.model('BookingReq',BookingSchema);

module.exports = BookingReqfun;