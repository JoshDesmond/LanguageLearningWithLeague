const express = require('express');
const app = express();
const port = 3000;

const data = require('./data.json');

app.param('id', function (req, res, next, id) {
    next();
})

app.get('/:id', function (req, res) {
    console.log(data[req.params.id]);
    res.send(data[req.params.id]);
    res.end();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
