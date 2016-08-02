var express = require("express");
var app = express();
var examples = require('./routes/examples.js');
var tutorials = require('./routes/tutorials.js');

app.set("port", (process.env.PORT || 8000));

app.use('/examples', examples);
app.use('/tutorials', tutorials);
app.use('/app', express.static('./app'));
app.use(express.static("./public"));

app.listen(app.get("port"), () => console.log(`Listening on port:${app.get("port")}`));
