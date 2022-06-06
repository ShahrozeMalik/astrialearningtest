const express = require("express");
const controller = require("./controllers/elearning")

const app = express();
const port = 5000;

app.get("/elearning", controller.get)

app.listen(port, ()=>{
    console.log(`Now listening on port ${port}`);
})

module.exports = app;