require("dotenv").config();

const express = require('express')
const cors = require("cors");
const bodyParser = require('body-parser');
const app = express()

// create application/json parser
var jsonParser = bodyParser.json()

//handle cors origin 
const corsOptions = {
    origin: process.env.BASE_URL,
};
app.use(cors(corsOptions));

//declare routes
const authRoutes = require("./routes/auth.routes");
const transactionsRoutes = require("./routes/transaction.routes");

//declare prefix endpoint
app.use("/api/auth", jsonParser, authRoutes);
app.use("/api/transactions", jsonParser, transactionsRoutes);

let port = 8000;
app.listen(port, () => {
    console.log(`Running at localhost:${port}`);
});