const router = require('express').Router();
const Book = require('../models/Book');

router.get('/books', async (req, res) => {
    try{
        res.json({
            books: await Book.find()
        })
    } catch(e){
        res.status(500).json({message: e.message}).send();
    }
});

router.post('/books', async (req, res) => {
    const {id, title, author, publisher, genre, ISBN} = req.body;
    const fields = [id, title, author, publisher, genre, ISBN];
    try{
        res.json({
            books: await new Book(req.body).save()
        })
    } catch(e){
        if(!fields.every(field => field)){
            return res.status(400).json({message: e.message}).send();
        }
        return res.status(500).json({message: e.message}).send();
    }
});

router.put('/books/:id', async (req, res) => {
    const {id} = req.params;
    try{
        const book = await Book.findOneAndUpdate({id}, req.body, {new: true});
        if(!book){
            return res.status(404).json({message: 'Book not found'}).send();
        }
        res.send(book);
    } catch(e){
        res.status(500).json({message: e.message}).send();
    }
});

module.exports = router;