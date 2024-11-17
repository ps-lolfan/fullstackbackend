const Book = require('../models/Book');

exports.getBooks = async (req, res) => {
    const books = await Book.find();
    res.json(books);
};

exports.getBook = async (req, res) => {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
};

exports.createBook = async (req, res) => {
    const newBook = new Book({ title: req.body.title, author: req.body.author });
    await newBook.save();
    res.status(201).json(newBook);
};

exports.updateBook = async (req, res) => {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!book) return res.status(404).send('Book not found');
    res.json(book);
};

exports.deleteBook = async (req, res) => {
    const book = await Book.findByIdAndDelete(req.params.id);
    if (!book) return res.status(404).send('Book not found');
    res.status(204).send();
};
