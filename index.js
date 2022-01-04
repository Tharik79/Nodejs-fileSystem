
const fs = require('fs');
const http = require('http');
const path = require('path')

const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = process.env.PORT; // this code for heroku to autoassign the port after deploy there.
// const PORT = 9000; // change this to above code before deploy to heroku.
 
app.get('/', function (request, response) {
  response.send("Hello 🌏😀");
});
 
app.listen(PORT, () => console.log("App is started in", PORT)
);



http.createServer(function (req,res)  {


  // Task-1 below code to create folder and write current date timestamp.

const dateObj = new Date();  // initialization of date variable
fs.writeFile(`./SampleFolder/currentDate-time.txt`, `${dateObj.toDateString()}`, (err) => {
          console.log(" file created and completed writing !!!");

          res.end(`${dateObj.toDateString()}`);  // create folder and write  current time stamp to respond.
          
      });


        // Task-2 below code to get text files in a particular folder:


        
      fs.readdir(`./sampleFolder/`, (err, files) => {
        if (err)
          console.log(err);
        else {
          console.log("\Filenames with the .txt extension:");
          files.forEach(file => {
            if (path.extname(file) == ".txt")
              console.log(file);
              res.end(file);
              
          })
        }
      })
      



      

  

} );


