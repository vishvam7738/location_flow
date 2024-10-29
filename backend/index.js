const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// In-memory storage for addresses
const addresses = [];

// Root route (for base API check)
app.get('/', (req, res) => {
  res.send('Welcome to the Location Flow API');
});

// Route to render Location Permission Modal (simulated API response for a frontend route)
app.get('/api/location-permission', (req, res) => {
  res.json({ 
    message: 'Please enable location permissions to proceed.',
    nextStep: '/api/address-management'
  });
});

// Route to render Address Management
app.get('/api/address-management', (req, res) => {
  res.json({
    message: 'Manage Your Addresses',
    addresses: addresses
  });
});

// Route to save address
app.post('/api/addresses', (req, res) => {
  const address = req.body;
  addresses.push(address);
  res.status(201).json({ message: 'Address saved successfully', address });
});

// Route to retrieve all addresses
app.get('/api/addresses', (req, res) => {
  res.status(200).json(addresses);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
