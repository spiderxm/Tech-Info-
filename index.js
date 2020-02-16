//jai hind

const express = require("express");
var app = express();
var http = require('http')
var path = require("path");
var mongoose = require("mongoose", { useUnifiedTopology: true });
var server = http.createServer(app);
var port = 3000;
// mongodb+srv://aman74871:<password>@cluster0-bgtkp.mongodb.net/test?retryWrites=true&w=majority
var URL = "mongodb+srv://aman74871:quasar18212728@cluster0-bgtkp.mongodb.net/test?retryWrites=true&w=majority"
var bodyparser = require("body-parser");
// app.use(bodyParser.json());
app.use(bodyparser.urlencoded({ extended: true }));
var User = require('./MODELS/user');

mongoose.connect(URL, { useNewUrlParser: true });
console.log('connected to database');
app.use(express.static(path.join(__dirname, "public")));

//login route
app.get("/log-in", function(req, res) {
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "log-in.html"));
});

//log-in post
app.post("/log-in", function(req, res) {

    var emailId = req.body.email;
    var passWord = req.body.password;

    User.findOne({ email: req.body.email, password: req.body.password }, function(err, user) {
        if (err) {
            console.log('THIS IS ERROR RESPONSE');
            res.send("Sorry something went wrong.....");

        }
        if (user) {
            console.log('THIS IS ISMATCH RESPONSE');
            res
                .status(200)
                .sendFile(path.join(__dirname, "public", "home.html"));
        }
    });
});

//registration route
app.get("/registration", function(req, res) {
    // console.log('hi')
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "registration.html"));
});

//reg. post
app.post("/registration", function(req, res) {
    console.log('hi')
    console.log(req.body.email);
    var user = new User({
        email: req.body.email,
        password: req.body.password,
        firstName: req.body.first,
        lastName: req.body.last
    });
    console.log(user);
    user.save()
        .then((result) => {
            console.log('data has been saved');
        }).catch((err) => {
            res.status(404).send('unable to save the data')
        });
    res.redirect('/log-in')
});

//home page route
app.get("/", function(req, res) {

    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "log-in.html"));
});

// logout route
app.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
})


//top contributors route
app.get("/gitcont", function(req, res) {
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "gitcont.html"));
});

//top developers route
app.get("/gitdev", function(req, res) {
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "git_top_developers.html"));
});

//programming lang route
app.get("/prog_lang", function(req, res) {
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "prog_lang.html"));
});

//Technews route
app.get("/newshome", function(req, res) {
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "newshome.html"));
});

//COdeforcestopdevelopers
app.get("/codeforcesrating", function(req, res) {
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "codeforcesrating.html"));
});

//bitcoin news
app.get("/bitcoin", function(req, res) {
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "bitcoin.html"));
});

//indianews
app.get("/indianews", function(req, res) {
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "indianews.html"));
});

//usanews
app.get("/usanews", function(req, res) {
    res
        .status(200)
        .sendFile(path.join(__dirname, "public", "usanews.html"));
});

server.listen(port);
console.log(`server is listening at port ${port}`)