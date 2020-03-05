//jshint esversion:6

const express = require("express");
const app = express();
const https = require("https");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/", function(req, res){
res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req, res){
const firstName = req.body.fName;
const lastName = req.body.lName;
const email = req.body.email;

console.log(firstName,lastName,email);
});

app.listen(3000, function(){
  console.log("Server started on port 300");
});


/* d7cfa68fa6607c938872c8bb141066c1-us19     API key for mailchimp*/

/* 06a9949b7a    Unique ID for audience*/
