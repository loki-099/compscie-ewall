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
  database: "test"
})


app.get("/", (req,res) => {
  const sql = "select * from testtable"
  db.query(sql, (err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data)
  })
})


app.post("/post", async (req, res) => {
  const sql = "INSERT INTO `testtable` (`id`, `name`, `address`) VALUES (NULL, ?, ?)";
  db.query(sql, [req.body.name, req.body.address], (err, data) => {
    if (err) {
      console.log(err);
    }
    res.json(data)
  })
})

app.listen(3001, () => {
  console.log("Server running on port 3001");
})