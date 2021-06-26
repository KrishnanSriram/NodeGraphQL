const express = require('express');
const app = express();
const PORT = 3000;
const HWRoute = require('./routes/hworld');
const BookQueryRoute = require('./routes/books');
const BookAuthorRoute = require('./routes/booksauthors');
app.get('/', (req, res, next) => {
    res.status(200).json({'message': 'Hello World. Welcome to GraphQL'});
});
app.use('/hworld', HWRoute);
app.use('/book', BookQueryRoute);
app.use('/bookauthor', BookAuthorRoute);

app.listen(PORT, () => {
    console.log(`Application listening in port ${PORT}`);
})