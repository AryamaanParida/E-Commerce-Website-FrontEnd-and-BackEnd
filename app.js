const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: "*",
    methods: ['GET','POST','PATCH','DELETE','PUT'],
    allowHeaders: 'content-Type, Authorization, Origin, X-Requested-with, Accept'
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const productsRoute = require('./routes/products');
const ordersRoute = require('./routes/orders');

app.use('/api/products',productsRoute);
app.use('/api/orders',ordersRoute);


module.exports = app;
