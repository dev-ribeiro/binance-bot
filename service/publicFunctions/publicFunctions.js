const api = require("../api/api");

const publicFunction = async (endpoint, method = "GET", params = {}) => {
    let call = await api({
        url: endpoint,
        method: method,
        params: params
    }).then(response => { return response.data });
    return call
};

const serverTime = async (req, res) => {
    let result = await publicFunction("/v3/time");
    res.json(result)
};

const exchangeInformation = async (req, res) => {
    let pair = await req.params.symbol;
    let result = await publicFunction("/v3/exchangeInfo","GET",{symbol:pair});
    res.json(result);
};

module.exports = { serverTime, exchangeInformation }