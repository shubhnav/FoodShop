const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fetch   = require('node-fetch');
const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/hello', (req, res) => {
  var url = "http://starlord.hackerearth.com/insta";
  fetch(url)
    .then(res => res.json())
    .then(data => {
        res.send({ data });
    })
    .catch(err => {
        res.send(err);
    });
});


if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
