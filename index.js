import express from "express";
import axios from "axios";
import dotenv from "dotenv";

const app = express();
const port = 3000;

dotenv.config();

app.get("/", (req, res) => {
    res.render("index.ejs");
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})