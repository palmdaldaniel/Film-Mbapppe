const Booking = require("../models/Booking");

const createBooking = async (req, res) => {
    console.log('bookingData', req.body);

      const booking = await Booking.create({
        userId: req.body.userId,
        showingId: req.body.showingId,
        tickets: req.body.tickets
    });

    //res.send(booking); 
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

    Booking.find({ userId: req.query.userId })
        .populate({
            path: 'showingId',
            populate: ('film saloon')
        })
        .exec((err, bookings) => {
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
                let showingDate = new Date(`${oneBooking.showingId.date} ${oneBooking.showingId.time}`)
                
                if (showingDate.valueOf() > currentDate.valueOf()) {
                    upcomingBookings.push(oneBooking)
                } else {
                    previousBookings.push(oneBooking)
                }
            })
            res.json({ previousBookings, upcomingBookings });
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

const getBookingsByShowingId = async (req, res) => {
    let bookings = await Booking.find({ 'showingId': req.params.showingId }).exec()
    let booked = []
    let allTickets = bookings.map(oneBooking => Object.values(oneBooking.tickets))// [[{..}], [{..}], [{..}], [{..}]]
    for (const oneTicket of allTickets) {
      console.log(oneTicket);
      for (const element of oneTicket) {
        let tempObj = {}
        tempObj.seatingNumber = element.seatingNumber
        tempObj.rowNumber = element.rowNumber
        booked.push(tempObj)
      }
    }
    res.json(booked); // [{"seatingNumber": 6,"rowNumber": 1},{"seatingNumber": 16,"rowNumber": 3}]
}

const deleteBooking = async (req, res) => {
    try {
        let exists = await Booking.exists({ _id: req.params.bookingid });
        if (exists) {
            await Booking.deleteOne({ _id: req.params.bookingid }).exec();
            res.json({
                message: `Booking with id ${req.params.bookingid} has been deleted.`
            });
            return;
        }
    } catch (error) {
        res
            .status(404)
            .json({ error: `Booking with id ${req.query.bookingid} does not exist.` });
        return;
    }
}

module.exports = {
    createBooking,
    getBookingById,
    getBookingsByUserId,
    getAllBookings,
    deleteBooking,
    getBookingsByShowingId

};

