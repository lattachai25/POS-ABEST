const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const mysql = require("mysql");
const { urlencoded } = require("body-parser");
const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "pos",
});
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/partner/get", (req, res) => {
  const sqlSelect = "SELECT * FROM partner";
  db.query(sqlSelect, (ree, result) => {
    res.send(result);
    // console.log(result);
  });
});

app.post("/api/partner/insert", (req, res) => {
  const code_sub = req.body.code_sub;
  const name = req.body.name;

  const sqlInsert = "INSERT INTO partner (code_sub, name) VALUES (?,?)";
  db.query(sqlInsert, [code_sub, name], (ree, result) => {
    console.log(result);
  });
});

app.delete("/api/partner/delete/:code_sub", (req, res) => {
  const name = req.params.code_sub;
  const sqlDelete = "DELETE FROM partner WHERE name = ? ";
  db.query(sqlDelete, name, (err, result) => {
    if (err) console.log(ree);
  });
});

app.put("/api/partner/update", (req, res) => {
  const name = req.body.code_sub;
  const review = req.body.name;
  const sqlUpdate = "UPDATE partner SET name = ? WHERE name = ?";
  db.query(sqlUpdate, [review, name], (err, result) => {
    if (err) console.log(err);
  });
});

app.listen(3001, () => {
  console.log("return on port 3001");
});
