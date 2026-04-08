import express from "express";
import axios from "axios";
import bodyParser from "body-parser";
import dotenv from "dotenv";

const app = express();
const port = 3000;

dotenv.config();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var data = [
    {
        id: 1,
        title: "The war of the worlds",
        olid: "OL33225306M",
        cover: `https://covers.openlibrary.org/b/olid/OL33225306M-M.jpg`,
        score: "10",
        date: "1/20/2025",
        summary: "Lorem ipsum dolor sit amet. Ut minus unde et nisi consequatur ex provident aliquam eos numquam quisquam nam enim similique in placeat natus? Est quae voluptatem qui enim optio quo maiores eligendi non eaque voluptatem aut dolore alias et iusto dolores. Aut quis quod a aliquid libero ut deserunt eaque et aliquam accusantium."
    },
    {
        id: 2,
        title: "Barbarians at the Gate",
        olid: "OL24272655M",
        cover: "https://covers.openlibrary.org/b/olid/OL24272655M-M.jpg",
        score: "9",
        date: "12/30/2025",
        summary: "Ea rerum asperiores sit nobis culpa cum consequuntur doloremque ut quisquam consequuntur aut tempora inventore. Et ducimus voluptatibus a sunt officia ea iure sunt ea placeat suscipit ut quaerat laudantium ut vero eaque ex quia eaque. Et ipsa voluptas id dicta quia et iusto voluptatem qui aliquam molestiae qui soluta quia est inventore atque id dolor voluptates."
    },
    {
        id: 3,
        title: "Julius Ceasar",
        olid: "OL8201309M",
        cover: "https://covers.openlibrary.org/b/olid/OL8201309M-M.jpg",
        score: "9",
        date: "3/15/2026",
        summary: "Et inventore vero a suscipit saepe quo dolorem architecto. Ea maiores iure eos ullam eius ut quia eveniet in laboriosam illo aut eaque enim qui unde enim. Aut labore cupiditate sit neque vitae eum iusto enim et quasi ipsam et suscipit modi. Sit ipsa deserunt ex quasi quaerat quo cumque saepe a impedit rerum a sunt iste et facilis voluptatum eum voluptatibus odio."
    },
];

app.get("/", (req, res) => {
    res.render("index.ejs", {data: data});
});

app.get("/add", (req, res) => {
    res.render("add.ejs");
});

app.get("/edit", (req, res) => {
    res.render("edit.ejs");
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});