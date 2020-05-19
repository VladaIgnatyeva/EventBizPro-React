const express = require('express');
const path = require('path');
const port = process.env.PORT || 8080;
const router = express.Router();
const News = require('./src/mongoose/models/News');
const bodyParser = require('body-parser');
const cors = require('cors');


const db = require('./src/mongoose/mongoose');


// здесь у нас происходит импорт пакетов и определяется порт нашего сервера
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

//здесь наше приложение отдаёт статику
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

//простой тест сервера
app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/news', function (req, res) {
    //console.log('server get before');

    const result = News.find({}, {
        title: 1,
        description: 1,
        _id: 1
    });

    //console.log('server get ', result);
    result.then(data => res.json(data))
        .catch(err => res.status(400).send(err));
});

app.post('/news', function (req, res) {
    // console.log('new news req', req.body)
    const news = new News({
        title: req.body.title,
        description: req.body.description
    });

    // console.log('new news', news)
    news.save(function (err) {
        if (!err) {
            return res.json(news);
        } else {
            if (err.name === 'ValidationError') {
                res.statusCode = 400;
                res.json({
                    error: 'Validation error'
                });
            } else {
                res.statusCode = 500;
                //log.error(`Internal error(${res.statusCode}): ${err.message}`);
                res.json({
                    error: 'Server error'
                });
            }
        }
    });

});

//обслуживание html
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port);


