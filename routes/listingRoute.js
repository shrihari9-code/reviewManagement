const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/authMiddleware');
const authorizeMiddleware = require('../middlewares/authorizeMiddleware');
const listingController = require('../controller/ListingController');

// Create a new listing
router.post('/listings', authMiddleware, authorizeMiddleware(['BusinessOwner']), listingController.createListing);

// Read all listings
router.get('/listings', authMiddleware, authorizeMiddleware(['BusinessOwner', 'User']), listingController.getAllListings);

// Update a listing
router.put('/listings/:id', authMiddleware, authorizeMiddleware(['BusinessOwner']), listingController.updateListing);

// Delete a listing
router.delete('/listings/:id', authMiddleware, authorizeMiddleware(['BusinessOwner', 'User']), listingController.deleteListing);

module.exports = router;
