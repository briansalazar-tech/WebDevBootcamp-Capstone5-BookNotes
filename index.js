import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import pg from "pg";

dotenv.config();

const app = express();
const port = 3000;

const db = new pg.Client({
    user: "postgres",
    host: "localhost",
    database: "booknotes",
    password: process.env.DBPASSWORD,
    port: 5432
});
db.connect();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

var data = [
    {
        id: 1,
        title: "The war of the worlds - TESTING",
        olid: "OL33225306M",
        cover_url: `https://covers.openlibrary.org/b/olid/OL33225306M-M.jpg`,
        score: "10",
        date_read: "2025-01-20",
        summary: "Lorem ipsum dolor sit amet. Ut minus unde et nisi consequatur ex provident aliquam eos numquam quisquam nam enim similique in placeat natus? Est quae voluptatem qui enim optio quo maiores eligendi non eaque voluptatem aut dolore alias et iusto dolores. Aut quis quod a aliquid libero ut deserunt eaque et aliquam accusantium."
    },
    {
        id: 2,
        title: "Barbarians at the Gate - TESTING",
        olid: "OL24272655M",
        cover_url: "https://covers.openlibrary.org/b/olid/OL24272655M-M.jpg",
        score: "9",
        date_read: "2025-12-30",
        summary: "Ea rerum asperiores sit nobis culpa cum consequuntur doloremque ut quisquam consequuntur aut tempora inventore. Et ducimus voluptatibus a sunt officia ea iure sunt ea placeat suscipit ut quaerat laudantium ut vero eaque ex quia eaque. Et ipsa voluptas id dicta quia et iusto voluptatem qui aliquam molestiae qui soluta quia est inventore atque id dolor voluptates."
    },
    {
        id: 3,
        title: "Julius Ceasar - TESTING",
        olid: "OL8201309M",
        cover_url: "https://covers.openlibrary.org/b/olid/OL8201309M-M.jpg",
        score: "9",
        date: "2026-03-15",
        summary: "Et inventore vero a suscipit saepe quo dolorem architecto. Ea maiores iure eos ullam eius ut quia eveniet in laboriosam illo aut eaque enim qui unde enim. Aut labore cupiditate sit neque vitae eum iusto enim et quasi ipsam et suscipit modi. Sit ipsa deserunt ex quasi quaerat quo cumque saepe a impedit rerum a sunt iste et facilis voluptatum eum voluptatibus odio."
    },
];


// Replace test data with DB data
async function updateData() {
    const result = await db.query(
        "SELECT * FROM booknotes"
    );
    // console.log(result.rows);
    data = result.rows;
};

updateData();

// Render Home page
app.get("/", (req, res) => {
    try {
        updateData();
        res.render("index.ejs", {data: data});
    } catch (error) {
        console.error(error);
    };
});

// Render Add page
app.get("/add", (req, res) => {
    try {
        res.render("add.ejs");
    } catch (error) {
        console.error(error);
    };
});

// Add new entry
app.post("/submitNew", (req, res) => {
    try {
        // Construct new entry
        const title = req.body.title;
        const olid = req.body.number;
        const coverURL = `https://covers.openlibrary.org/b/olid/${req.body.number}-M.jpg`;
        const score = req.body.score;
        const date_read = req.body.date;
        const summary = req.body.summary;
        // Update DB with new entry
        db.query(
            "INSERT INTO booknotes (title, olid, cover_url, score, date_read, summary) VALUES ($1, $2, $3, $4, $5, $6)",
            [title, olid, coverURL, score, date_read, summary]
        );
        updateData();
        res.redirect("/");
    } catch (error) {
        console.error(error);
    };
});

// Render edit entry page
app.get("/editentry/:entryroute", (req, res) => {
    try {
        var entry = data.find((entry) => entry.id == req.params.entryroute);
        res.render("edit.ejs", {entry: entry});
    } catch (error) {
        console.error(error);
    };
});

// Update existing entry
app.post("/updateEntry/:entryroute", (req, res) => {
    try {
        // Construct replacement entry
        const title = req.body.title;
        const olid = req.body.number;
        const coverURL = `https://covers.openlibrary.org/b/olid/${req.body.number}-M.jpg`;
        const score = req.body.score;
        const date_read = req.body.date;
        const summary = req.body.summary;
        const entryId = req.params.entryroute;
        // Update DB entry with replacement data
        db.query(
            "UPDATE booknotes SET title = $1, olid = $2, cover_url = $3, score = $4, date_read = $5, summary = $6 WHERE id = $7",
            [title, olid, coverURL, score, date_read, summary, entryId]
        );
        updateData();
        res.redirect("/")
    } catch (error) {
        console.error(error);
    };
});

// Delete entry
app.post("/delete/:entryroute", (req, res) => {
    try{
        data.forEach((item) => {
            if (item.id == req.params.entryroute) {
                const itemId = req.params.entryroute;
                // Delete DB entry based on id
                db.query(
                    "DELETE FROM booknotes WHERE id = $1",
                    [itemId]
                )};
        });
        updateData();
        res.redirect("/");
    } catch (error) {
        console.error(error);
    };
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});