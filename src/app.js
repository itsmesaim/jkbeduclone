const { log } = require('console');
const express = require('express');
const path = require('path');
const hbs = require("hbs");
const serveStatic = require('serve-static');
require("./db/conn");

const app = express();
const port = process.env.PORT || 8000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
// app.use("/node_modules", express.static('node_modules'));
// console.log(path.join(__dirname, "../public"));



app.get('/', function (req, res) {
    // res.sendFile(path.join(__dirname, '/index.html'));
    res.render("index")
});
// app.get('/home', function (req, res) {
//     // res.sendFile(path.join(__dirname, '/index.html'));
//     res.render("index")
// });

app.get('/contact', function (req, res) {
    res.render("contact")
});

app.get('/counselling', function (req, res) {
    res.render("counselling")
});

app.get('/about', function (req, res) {
    res.render("about")
});

app.get('/coaching', function (req, res) {
    res.render("coaching")
});

app.get('/financial', function (req, res) {
    res.render("financial")
});

app.get('/itservices', function (req, res) {
    res.render("itservices")
});

app.get('/masters', function (req, res) {
    res.render("Ms")
});

app.get('/first-year-programming', function (req, res) {
    res.render("firstyear")
});

app.get('/project', function (req, res) {
    res.render("project")
});

app.get('/second-year-programming', function (req, res) {
    res.render("secondyear")
});

app.get('/third-year-programming', function (req, res) {
    res.render("thirdyear")
});

app.get('/youth-empowerment-hub', function (req, res) {
    res.render("youth")
});
// app.get('/about', function (req, res) {
//     res.sendFile(path.join(__dirname, '/about.html'));
// })

// app.get('/contact', function (req, res) {
//     res.sendFile(path.join(__dirname, '/contact.html'));
// });


app.listen(port, () => {
    console.log(`connected at port number: ${port}`)
})