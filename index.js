
const fs = require('fs');
const http = require('http');
const path = require('path')

const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = process.env.PORT || 9000; // this code for heroku to autoassign the port after deploy there.
// const PORT = 9000; // change this to above code before deploy to heroku.
 
app.get('/', function (request, response) {
  response.send("Hello 🌏😀");
});
 
// app.listen(PORT, () => console.log("App is started in", PORT)
// );


app.get("/currentTimeStamp", (req, res) => {

   // Task-1 below code to create folder and write current date timestamp.

        const dateObj = new Date();  // initialization of date variable
      fs.writeFile(`./SampleFolder/currentDate-time.txt`, `${dateObj.toDateString()}`, (err) => {
          console.log(" file created and completed writing !!!");

          res.end(`${dateObj.toDateString()}`);  // create folder and write  current time stamp to respond.
          
      });
})


app.listen(PORT, () => console.log("App is started in", PORT)
);


