const express = require("express");
const router = express.Router();
const {serverTime, exchangeInformation} = require("../service/publicFunctions/publicFunctions");

router.get("/time",serverTime);
router.get("/exchange/:symbol",exchangeInformation);

module.exports = router