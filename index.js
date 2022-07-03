// Dependencies
require("dotenv").config();
const express = require("express");

// App
const app = express();

// Server
const PORT = process.env.PORT || 3335
app.listen(PORT, () => {
    console.log("Server running on port ", PORT)
})