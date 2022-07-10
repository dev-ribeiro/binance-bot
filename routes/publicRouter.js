const express = require("express");
const router = express.Router();
const {serverTime} = require("../service/publicFunctions/publicFunctions");

router.get('/time',serverTime);

module.exports = router