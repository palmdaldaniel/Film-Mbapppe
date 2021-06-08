const express = require("express");
const router = express.Router();

const bookingController = require("../controllers/bookingController");


router.post('', bookingController.createBooking)
router.get('/:bookingid', bookingController.getBookingById)
router.delete("/:bookingid", bookingController.deleteBooking)

module.exports = router;