const express = require("express");
const app = express();
const path = require("path");
const PORT = 8000;

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "client/build/index.html"), function (err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening at port ${PORT}`);
});
