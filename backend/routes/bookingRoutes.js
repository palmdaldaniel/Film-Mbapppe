const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/bookingController");


router.post('', bookingController.createBooking)
router.get('', bookingController.getAllBookings)
router.get('/user-bookings', bookingController.getBookingsByUserId)
router.get('/:showingId', bookingController.getBookingsByShowingId)
router.get('/:bookingid', bookingController.getBookingById)
router.delete("/:bookingid", bookingController.deleteBooking)
router.post('', bookingController.createBooking)

module.exports = router;