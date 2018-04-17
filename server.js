const express = require("express"); // brings express in

const app = express(); //  run express
const PORT = 5000;

// app.get("/", function(req, res) {
//   res.send("Hello World");
// });

// makes server listen for command
app.listen(PORT, function() {
  console.log(`listening on port: ${PORT}`);
});

// this will send you to localhost5000/hey
app.get('/hey', function (req, res) {
    res.send('/hey')
});