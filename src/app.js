require("dotenv-safe").config();
const express = require("express");
const cors = require("cors");
const db = require("./database/postgresConfig");

const app = express();

db.connect(err => {
    if(err) console.log(err);
});

app.use(cors());
app.use(express.json());

app.get("/terms", (req, res) => {
    return res.json({
        message: "Termos de Serviço"
    });
});


module.exports = app;