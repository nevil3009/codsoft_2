const express = require("express");
const expressAsyncHandler = require("express-async-handler");
const { isAuth } = require("../util");
const Booking = require("../model/bookingModel");
const bookingRouter = express.Router();
bookingRouter.get(
  '/',
  expressAsyncHandler(async (req, res) => {
    const bookings = await Booking.find({});
    if (!bookings) {
      res.status(404).send({ message: 'No bookings found!' });
      return;
    }
    res.send(bookings);
    return;
  })
);
bookingRouter.post(
  '/add/:id',
  expressAsyncHandler(async (req, res) => {
   const countSeats = req.body.countSeats;
   const seatClass=req.body.seatClass; 
    let totalFare = 0;
      if (seatClass === 'Economic') {
        totalFare += countSeats * 4000;
      } else {
        totalFare += countSeats * 6000;
      }
    const booking = new Booking({
      // userId: req.params.id,
      // flightId: req.body.flightId,
      // seatClass: req.body.seatClass,
      // arrAirport:req.body.arrAirport,
      // depAirport:req.body.depAirport,
      countSeats: req.body.countSeats,
      fare: totalFare,
      date:req.body.date
    });
    await booking.save();
    const bookings = await Booking.find({});
    res.send(bookings);
    return;
  })
);
bookingRouter.get(
  '/:id',
  expressAsyncHandler(async (req, res) => {
    const bookings = await Booking.find({ userId: req.params.id });
    if (!bookings) {
      res.status(404).send({ message: 'No bookings found!' });
      return;
    }
    res.send(bookings);
    return;
  })
);
 bookingRouter.put(
 '/delete/:date',
  expressAsyncHandler(async (req, res) => {
    await Booking.findOneAndDelete({ date: req.params.date });
    const bookings = await Booking.find({});
    if (!bookings) {
      res.status(404).send({ message: 'No bookings found!' });
      return;
    }
    res.send(bookings);
  })
);
module.exports=bookingRouter;