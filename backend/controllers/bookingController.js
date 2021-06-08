const Booking = require("../models/Booking");


const createBooking = async (req, res) => {
    let booking = await Booking.create({
        userId: req.body.userId,
        showingId: req.body.showingId,
        tickets: req.body.tickets
    });

    res.send(booking);
}


const getBookingById = async (req, res) => { 

    Booking.findById(req.params.bookingid).exec((err, booking) => {
        // Checks for thrown errors from the method itself.
        if (err) {
            res.status(400).json({ error: "Something went wrong" });
            return;
        }

        // If no match is found in the DB.
        if (!booking) {
            res
                .status(404)
                .json({ error: `Booking with id ${req.params.bookingid} does not exist` });
            return;
        }

        res.json(booking);
    });
}
const getBookingsByUserId = async (req, res) => { 

    Booking.find({userId: req.query.userId}).populate('showingId').exec((err, bookings) => {
        // Checks for thrown errors from the method itself.
        if (err) {
            console.log(`err`, err)
            res.status(400).json({ error: "Something went wrong" });
            return;
        }

        // If no match is found in the DB.
        if (!bookings) {
            res
                .status(404)
                .json({ error: `The user with id ${userId} dosen't have bookigs` });
            return;
        }

        let previousBookings = []
        let upcomingBookings = []
      
       bookings.map(oneBooking => {
           let currentDate = new Date()
           let showingDate = new Date(oneBooking.showingId.date)

            if(showingDate.valueOf() > currentDate.valueOf()) {
                upcomingBookings.push(oneBooking)
            } else {
                previousBookings.push(oneBooking)
            }
       })
        res.json({previousBookings, upcomingBookings});
       
    });

    
   
}

//for testing
const getAllBookings = async (req, res) => { 
    
    Booking.find().populate('showingId').exec((err, bookings) => {
        // Checks for thrown errors from the method itself.
        if (err) {
            res.status(400).json({ error: "Something went wrong" });
            return;
        }

        // If no match is found in the DB.
        if (!bookings) {
            res
                .status(404)
                .json({ error: `The user with id ${userId} dosen't have bookigs` });
            return;
        }

        res.json(bookings);
    });
   
}


module.exports = {
    getBookingById,
    createBooking,
    getBookingsByUserId,
    getAllBookings
};

