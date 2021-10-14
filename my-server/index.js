var express = require("express");
const path = require("path");
const search = require("./services/searchService.js");

const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.get("/search/:searchString", (req, res) => {
  const data = search(req.params.searchString);
  res.json(data);
});

app.listen(8000, () => console.log("Example app listening on port 8000!"));
