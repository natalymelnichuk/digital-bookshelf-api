
const express = require("express");
const Book = require("../models/Book");
const router = express.Router();

// Create

async function createBook (req, res) {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch(error) {
        console.error(error);
        res.status(400).json({ message: error.message });
    }
}

router.post("/", createBook);

// Read All

async function fetchAllBooks(req, res) {
    try {
        const books = await Book.find({});
        res.status(200).json(books);
    } catch(error) {
        console.error(error);
        res.status(400).json({ message: error.message })
    }
}

router.get("/", fetchAllBooks);

// Read One 

async function fetchOneBook (req, res) {
    try {
        const book = await Book.findById(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }

        res.json({ message: "Book fetched successfully!", book })
    } catch(error) {
        console.error(error);
        res.status(400).json({ message: error.message })
    }
}

router.get("/:id", fetchOneBook);

// Update

async function updateBook (req, res) {
    try {
        const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        
        if (!book) {
        return res.status(404).json({ message: "Book not found" });
        }

        res.status(200).json(book);
    } catch(error) {
        console.error(error);
        res.status(400).json({ message: error.message })
    }
}

router.put("/:id", updateBook);

// Delete 

async function deleteBook (req, res) {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });    
        }

        res.json({ message: "Book deleted successfully!", book })
    } catch(error) {
        console.error(error);
        res.status(400).json({ message: error.message })
    }
}

router.delete("/:id", deleteBook);


module.exports = router;