const express = require("express")
const app = express()
const cors = require("cors")
const mysql = require("mysql")
require("dotenv").config()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "compsci_ewall"
})


app.get("/", (req,res) => {
  const sql = "select * from posts order by createdAt DESC"
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data)
  })
})


app.post("/post", async (req, res) => {
  const sql = "INSERT INTO `posts` (`id`, `postAuthor`, `postText`, `createdAt`) VALUES (NULL, ?, ?, CURRENT_TIMESTAMP())";
  db.query(sql, [req.body.postAuthor, req.body.postText], (err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data)
  })
})

app.listen(process.env.PORT, () => {
  console.log("Server running on port 3001");
})