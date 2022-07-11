const express = require("express");
const router = express.Router();
const { serverTime, exchangeInformation, orderBook } = require("../service/publicFunctions/publicFunctions");

router.get("/time", serverTime);
router.get("/exchange/:symbol", exchangeInformation);
router.get("/depth/:symbol",orderBook)

module.exports = router