const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    
    userId:{type:Schema.Types.ObjectId, ref :"User", default: null},
    showingId: {type:Schema.Types.ObjectId, ref :"Showings", default: null},
    tickets: [
        {
        ticketId: {type:Number},
        price :{type:Number},
        seatingNumber: {type:Number},
    }
    ]

});

const Booking  = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
