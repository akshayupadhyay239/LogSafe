require('dotenv').config();
const express = require('express');
const path = require('path');
const connectDB = require('./config/db');

const indexRoute = require('./routes/index');
const authRoute = require('./routes/auth');
const createMailRoute = require('./routes/createAlias'); 
const recieveMailRoute = require('./routes/recieveMail');
const addBlacklistRoute = require('./routes/blacklist');
const toggleMailRoute = require('./routes/toggleAlias');
const getEmailsRoute = require('./routes/getAliases');
const userRoute = require('./routes/user');
const deleteAliasRouter = require('./routes/deleteAlias');

//Connecting To Database
connectDB();

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

//Private Endpoint
//AWS IP-Range
app.use('/recieve-mail',recieveMailRoute);

//Public 
app.use('/', indexRoute);
app.use(authRoute);
app.use('/user',userRoute);
app.use('/create-alias', createMailRoute);
app.use('/blacklist',addBlacklistRoute);
app.use('/toggle-alias',toggleMailRoute);
app.use('/get-aliases',getEmailsRoute);
app.use('/delete-alias',deleteAliasRouter);

module.exports = app;