const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    try {
        const newsAPI = await axios.get("https://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=64ed30fc372e4394a72c2a9c31cf57c3");
        res.render('news', {
            articles: newsAPI.data.articles
        });
    } catch (error) {
        if(error.response){res.render('news', {
            articles: null
        });
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }else if(error.request) {
            console.log(error.request);
        }else {
            console.log('Error', error.message);
        }
    }

});

router.get('/article:name', async (req, res) => { 
    let articleId = req.params.id;
    try {
        const newsAPI = await axios.get("https://newsapi.org/v2/top-headlines?country=ca&category=sports&apiKey=64ed30fc372e4394a72c2a9c31cf57c3" + articleId);
        res.render('news', {
            articles: newsAPI.data.articles
        });
    } catch (error) {
        if(error.response){res.render('news', {
            articles: null
        });
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
        }else if(error.request) {
            console.log(error.request);
        }else {
            console.log('Error', error.message);
        }
    }

});

module.exports = router;