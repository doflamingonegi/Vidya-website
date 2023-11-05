const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo');
require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(
    session({
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongoUrl: process.env.MONGO_URL, collectionName: "MainDB" }),
    })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

const indexRoute = require('./routes/index');
const authRoute = require('./routes/auth');
const dashboardRoute = require('./routes/dashboard');
const forumRoute = require('./routes/forum'); 
const videosRoute = require('./routes/videos');
const paymentRoute = require('./routes/payment');
const contactRoute = require('./routes/contact');

app.use('/', indexRoute);
app.use('/forum', forumRoute); 
app.use('/auth', authRoute);
app.use('/dashboard', dashboardRoute);
app.use('/videos', videosRoute);
app.use('/payment', paymentRoute);
app.use('/contact',contactRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
