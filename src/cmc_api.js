const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();

const port = process.env.PORT || 5050;

app.use(cors());

app.get("/global", (req, res) => {
  axios
    .get("https://pro-api.coinmarketcap.com/v1/global-metrics/quotes/latest", {
      headers: {
        "X-CMC_PRO_API_KEY": "9d669168-0ed6-4c2e-ae1f-e68b8d6d286a",
      },
    })
    .then((response) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(response.data);
    });
});

app.get("/ohlcv", (req, res) => {
  const argument = req.query.argument;
  axios
    .get(
      "https://pro-api.coinmarketcap.com/v2/cryptocurrency/ohlcv/historical?symbol=" +
        argument +
        "&count=200",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "9d669168-0ed6-4c2e-ae1f-e68b8d6d286a",
        },
      }
    )
    .then((response) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/top", cors(), (req, res) => {
  axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?start=1&limit=100&convert=USD",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "xxxxx-xxxxxx-xxxxxx",
        },
      }
    )
    .then((response) => {
      // res.header("Access-Control-Allow-Origin", "*");
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/data", cors(), (req, res) => {
  const argument = req.query.argument;
  axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=" +
        argument +
        "&convert=USD",
      {
        headers: {
          "X-CMC_PRO_API_KEY": "xxxxx-xxxxxx-xxxxxx",
        },
      }
    )
    .then((response) => {
      // res.header("Access-Control-Allow-Origin", "*");
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/metadata", (req, res) => {
  const argument = req.query.argument;
  axios
    .get(
      "https://pro-api.coinmarketcap.com/v1/cryptocurrency/info?symbol=" +
        argument,
      {
        headers: {
          "X-CMC_PRO_API_KEY": "xxxxx-xxxxxx-xxxxxx",
        },
      }
    )
    .then((response) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.get("/metadata2", (req, res) => {
  const argument = req.query.argument;
  axios
    .get("https://pro-api.coinmarketcap.com/v1/cryptocurrency/info", {
      headers: {
        "X-CMC_PRO_API_KEY": "xxxxx-xxxxxx-xxxxxx",
      },
    })
    .then((response) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.send(response.data);
    })
    .catch((error) => {
      res.status(500).send(error);
    });
});

app.listen(port, () => {
  console.log("Server listening on port 3000");
});
