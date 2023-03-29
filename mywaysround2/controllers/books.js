const books = require('../models/books');

exports.postBook = (req,res,next) => {
    const title = req.body.title;
    const author = req.body.author ;
    const year = req.body.year;

    books.create({
        title : title,
        author : author,
        year : year
    })
    .then(book => res.json(book))
    .catch(arr => console.log(err))
}


exports.getBooks = (req,res,next) => {
    books.findAll()
    .then(books =>{
        res.json(books)
    })
    .catch(err => console.log(err))
}

exports.getBook = (req,res,next) => {
    const bookId = req.params.bookId
    books.findByPk(bookId)
    .then(book => {
        res.jsom(book)
    })
    .catch(arr => console.log(err))
}