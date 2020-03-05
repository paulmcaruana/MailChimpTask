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

var data = {
  members:[
    {
      email_address:email,
      status:"subscribed",
      merge_fields: {
      FNAME: firstName,
      LNAME: lastName
    }
  }
  ]
};

var jsonData = JSON.stringify(data);
const url = "https://us19.api.mailchimp.com/3.0/lists/06a9949b7a";

const options = {
    method:"POST",
    auth:"MadDogDev:a4562c0c44f6e55fd37bfc999fd43e23-us19"
};

const request = https.request(url,options,function(response){


if (response.statusCode === 200){
  res.send ("Successfully Subscribed!");
}
else {
  res.send ("Error!");
}


response.on("data",function(data){
 console.log(JSON.parse(data));
});
});

request.write(jsonData);
request.end();
});

app.listen(3000, function(){
  console.log("Server started on port 300");
});


/* d7cfa68fa6607c938872c8bb141066c1-us19     API key for mailchimp*/

/* 06a9949b7a    Unique ID for audience*/

// https://usX.api.mailchimp.com/3.0/lists    end point
