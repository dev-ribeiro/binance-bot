const axios = require("axios");

const api = axios.create({
    baseURL:"https://testnet.binance.vision/api"
});

module.exports = api