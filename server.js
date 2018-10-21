const express = require('express');
const exhdb = require('express-handlebars');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/api');

const MONGODB_URI = process.env.MONGODB_URI || process.env.MONGO_LOCAL
const PORT = process.env.PORT || 3000;

