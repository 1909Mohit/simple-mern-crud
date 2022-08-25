const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const studentRoute = require('./routes/student.routes');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());


// Connecting Database mongodb
mongoose.connect('mongodb://127.0.0.1:27017/mydatabase')
    .then((x) => {
        console.log('Connected to DB');
    }).catch((err) => {
        console.log('Error Connecting to mongo', err.message);
    });

app.use('/students', studentRoute);
app.get('/', (req, res) => {
    res.send("It's Working");
})



const port = process.env.PORT || 4000;
app.listen(port, (req, res) => {
    console.log(`Listening on port ${port}`);
});



app.use((err, req, res, next) => {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});