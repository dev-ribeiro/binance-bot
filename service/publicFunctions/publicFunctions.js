const api = require("../api/api");

const publicFunction = async (endpoint, method = "GET") => {
    let call = await api({
        url: endpoint,
        method: method
    }).then(response => { return response.data });
    return call
};

const serverTime = async (req, res) => {
    let result = await publicFunction("/v3/time");
    res.json(result)
};

module.exports = { serverTime }