const express = require("express");
const app = express();
const port = 3000;

app.get("/Tin-tuc", (req, res) => {
  var a = 1;
  var b = 2;

  var c = a + b;
  var d = a + c;
  res.send("Hello World !");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
