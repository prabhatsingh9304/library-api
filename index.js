const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

mongoose.connect('mongodb+srv://node-js-backend:singh1337@cluster0.hl0l2q8.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});

app.use('/api', require('./routes/api'));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
