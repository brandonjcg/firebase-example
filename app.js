const express = require('express');
const morgan = require('morgan');
const admin = require('firebase-admin');

const app = express();
require('dotenv').config();

const serviceAccount = require('./config.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.FIREBASE_DATABASE_URL,
});
const db = admin.database();
app.use((req, res, next) => {
    req.db = db;
    next();
});

app.use(morgan('dev'));
app.use(express.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.use('/api', require('./src/routes'));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${process.env.PORT || 3000}`);
});
