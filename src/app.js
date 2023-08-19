const { log } = require('console');
const express = require('express');
const path = require('path');
const hbs = require("hbs");
const {body, validationResult} = require('express-validator');
const bodyParser = require('body-parser');
const serveStatic = require('serve-static');
require("./db/conn");
const Student = require("./models/register");


const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
// app.use(bodyParser.raw());
app.use(express.urlencoded({ extended: false }));

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
})

// app.post('/contact',  async (req, res)=> {
//     try{
//         const StudentPurpose = new Student({
//             fname: req.body.fname,
//             numb: req.body.numb,
//             email: req.body.email,
//             address: req.body.address,
//             purpose: req.body.purpose,
//         })
//          const Purposed = await StudentPurpose.save();
//         res.status(201).render("index");
//     }
//     catch(error){
//         res.status(400).send(error);
//     }
// });

app.post('/contact', [
    // Add validation rules here using express-validator
    body('fname').notEmpty().withMessage('First name is required'),
    body('numb').notEmpty().withMessage('Number is required'),
    body('email').isEmail().withMessage('Invalid email'),
    body('address').notEmpty().withMessage('Address is required'),
    body('purpose').notEmpty().withMessage('Purpose is required')
], async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).render('contact', { errors: errors.array() });
    }

    try {
        const StudentPurpose = new Student({
            fname: req.body.fname,
            numb: req.body.numb,
            email: req.body.email,
            address: req.body.address,
            purpose: req.body.purpose,
        })
        const Purposed = await StudentPurpose.save();
        res.status(201).render('contact', { successMessage: 'Form submitted successfully' });
    } catch (error) {
        res.status(400).send(error);
    }
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