// Dependencies
require("dotenv").config();
const express = require("express");

//Routes
const publicRouter = require("./routes/publicRouter")

// App
const app = express();
app.use('/',publicRouter)

// Server
const PORT = process.env.PORT || 3335
app.listen(PORT, () => {
    console.log("Server running on port ", PORT)
})