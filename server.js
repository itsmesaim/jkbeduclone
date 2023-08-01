const express = require('express')
const path = require('path')

const app = express();
const port = 8000;



app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, '/about.html'));
})

app.get('/contact', function (req, res) {
    res.sendFile(path.join(__dirname, '/contact.html'));
});


app.listen(port, () => {
    console.log(`connected at port number: ${port}`)
})