const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    userId: { type: Schema.Types.ObjectId, ref: "User", default: null },
    showingId: { type: Schema.Types.ObjectId, ref: "Showing", default: null },
    tickets: [
        {
            price: { type: Number },
            seatingNumber: { type: Number },
            rowNumber: { type: Number },
            type: {type: String}
        }
    ]
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;
