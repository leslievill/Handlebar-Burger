const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));
// Parse application body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("root");
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});