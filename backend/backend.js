const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

var corsOptions = {
    origin: 'http://localhost:3001',
}

const data = require('./data.json');

app.param('id', function (req, res, next, id) {
    next();
})

app.get('/:id', cors(corsOptions), function (req, res) {
    console.log(req.params.id + ": " + data[req.params.id].name);
    res.send(data[req.params.id]);
    res.end();
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
