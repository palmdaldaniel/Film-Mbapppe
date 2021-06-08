const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/bookingController");


router.post('', bookingController.createBooking)
router.get('', bookingController.getAllBookings)
router.get('/user-bookings', bookingController.getBookingsByUserId)
router.get('/:bookingid', bookingController.getBookingById)

module.exports = router;