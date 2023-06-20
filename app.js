const express = require('express');
const dotenv = require('dotenv');
const port = process.env.PORT || 3000;
const axios = require('axios');
const app = express();
const path = require('path');
const expressLayout = require('express-ejs-layouts');


app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/css', express.static(path.join(__dirname, 'public/css')));

app.use(expressLayout);

app.use('/', require('./src/routes/news'));


app.set('layout', './layouts/main');
app.set('view engine', 'ejs');








app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`);
});