const express = require("express")
const app = express()
const cors = require("cors")
const mysql = require("mysql")

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "compsci_ewall"
})


app.get("/", (req,res) => {
  const sql = "select * from posts"
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data)
  })
})


app.post("/post", async (req, res) => {
  const sql = "INSERT INTO `posts` (`id`, `postAuthor`, `postText`, `createdAt`) VALUES (NULL, ?, ?, ?)";
  db.query(sql, [req.body.postAuthor, req.body.postText, '2024-03-18 13:30:56'], (err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data)
  })
})

app.listen(3001, () => {
  console.log("Server running on port 3001");
})