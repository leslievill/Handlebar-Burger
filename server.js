const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true });

app.use(express.json());

app.get("/", (req, res) => {
  res.send("root");
});

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});