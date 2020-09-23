import express from 'express';
const router = express.Router();

// Homepage
router.get('/', (req, res) => {
    res.json({
        message: 'success',
        data: [],
    });
});

// About page
router.get('/about', (req, res) => {
    res.json({
        message: 'success',
        data: [],
    });
});

// Contact page
router.get('/contact', (req, res) => {
    res.json({
        message: 'success',
        data: [],
    });
});

module.exports = router;