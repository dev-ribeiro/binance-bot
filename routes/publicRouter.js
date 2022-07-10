const express = require("express");
const router = express.Router();
const {serverTime, exchangeInformation} = require("../service/publicFunctions/publicFunctions");

router.get("/time",serverTime);
router.get("/exchangeInfo",exchangeInformation);

module.exports = router