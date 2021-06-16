const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/bookingController");

router.get('/user-bookings', bookingController.getBookingsByUserId)
router.get('/:showingId', bookingController.getBookingsByShowingId)
router.get('/:bookingid', bookingController.getBookingById)
router.delete("/:bookingid", bookingController.deleteBooking)
router.get('', bookingController.getAllBookings)
router.post('', bookingController.createBooking)

module.exports = router;