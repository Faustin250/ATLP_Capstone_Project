 const express = require('express');
 const Contact = require('../models/contact');
 const contactController = require('../controllers/contactController');
 const mongoose = require('mongoose');
 const checkAuth = require('../middlewares/check-auth');

 const router = express.Router();

 router.get('/', contactController.contacts_get_all);
 router.post('/create', checkAuth, contactController.contacts_create_one);
 router.delete('/:contactId', checkAuth, contactController.contacts_delete_one);

 module.exports = router;