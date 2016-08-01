var express = require("express");
var app = express();
var problems = require('./routes/problems.js');

app.set("port", (process.env.PORT || 8000));

app.use('/problems', problems);
app.use('/app', express.static('./app'));
app.use(express.static("./public"));

app.listen(app.get("port"), () => console.log(`Listening on port:${app.get("port")}`));
