require('./api/db');

const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const cors = require('cors');

const homeApi = require('./api/home/home.route');
const categoryApi = require('./api/category/category.route');
const orderApi = require('./api/order/order.route');
const productApi = require('./api/product/product.route');
const transporterApi = require('./api/transporter/transporter.route');
const userApi = require('./api/user/user.route');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())

app.use('/api/home',homeApi);
app.use('/api/category', categoryApi);
app.use('/api/order', orderApi);
app.use('/api/product', productApi);
app.use('/api/transporter', transporterApi);
app.use('/api/user', userApi);

module.exports = app;
