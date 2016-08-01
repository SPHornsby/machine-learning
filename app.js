var express = require("express");
var app = express();

app.set("port", (process.env.PORT || 8000));
app.use('/app', express.static('./app'));
app.use(express.static("./public"));

app.listen(app.get("port"), () => console.log(`Listening on port:${app.get("port")}`));
