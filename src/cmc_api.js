const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();


app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

  app.get('/ohlcv', (req, res) => {
    const argument = req.query.argument;
    axios.get('https://sandbox-api.coinmarketcap.com/v2/cryptocurrency/ohlcv/historical?symbol=' + argument, {
      headers: {
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
      }
    })
      .then(response => {
        res.header("Access-Control-Allow-Origin", "*");
        res.send(response.data);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  });

  app.get('/top', cors(), (req, res) => {
    axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=50&convert=USD', {
      headers: {
        'X-CMC_PRO_API_KEY': 'b54bcf4d-1bca-4e8e-9a24-22ff2c3d462c'
      }
    })
      .then(response => {
        res.header("Access-Control-Allow-Origin", "*");
        res.send(response.data);
      })
      .catch(error => {
        res.status(500).send(error);
      });
  });



app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
