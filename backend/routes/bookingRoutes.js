const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/bookingController");

router.get('/user-bookings', bookingController.getBookingsByUserId)
router.get('/:showingId', bookingController.getBookingsByShowingId)
router.get('/:bookingid', bookingController.getBookingById)
router.get('', bookingController.getAllBookings)

router.delete("/:bookingid", bookingController.deleteBooking)

router.post('', bookingController.createBooking)
router.post('', bookingController.createBooking)

module.exports = router;