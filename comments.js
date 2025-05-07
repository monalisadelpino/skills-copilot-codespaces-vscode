// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Sample data
let comments = [
    { id: 1, text: 'This is a comment' },
    { id: 2, text: 'This is another comment' },
];

// Get all comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Add a new comment
app.post('/comments', (req, res) => {
    const newComment = req.body;
    newComment.id = comments.length + 1;
    comments.push(newComment);
    res.status(201).json(newComment);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});