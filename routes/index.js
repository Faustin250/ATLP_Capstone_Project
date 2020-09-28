import express from 'express';
const router = express.Router();
const {
    requireAuth
} = require('../middlewares/authMiddleware');

// Homepage
router.get('/', (req, res) => {
    res.json({
        message: 'success',
        data: [],
    });
});

// About page
router.get('/about', requireAuth, (req, res) => res.render('dashboard'));
// Contact page
router.get('/contact', (req, res) => {
    res.json({
        message: 'success',
        data: [],
    });
});

module.exports = router;