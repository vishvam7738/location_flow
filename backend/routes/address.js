const express = require('express');
const Address = require('../models/Address');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const newAddress = new Address(req.body);
    await newAddress.save();
    res.status(201).json(newAddress);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
