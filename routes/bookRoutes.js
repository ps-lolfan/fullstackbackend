const express = require('express');
const {
    getBooks,
    getBook,
    createBook,
    updateBook,
    deleteBook
} = require('../controllers/bookController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/', authenticateToken, getBooks);
router.get('/:id', authenticateToken, getBook);
router.post('/', authenticateToken, createBook);
router.put('/:id', authenticateToken, updateBook);
router.delete('/:id', authenticateToken, deleteBook);

module.exports = router;
