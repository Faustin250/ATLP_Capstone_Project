import express from 'express';
import Contact from '../models/contact';
import contactController from '../controllers/contactController';
 
const router = express.Router();

// Ask a question
router.post('/create', contactController.createOne);

// Get One middleware
 


module.exports = router;