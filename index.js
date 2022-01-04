const fs = require('fs');
const http = require('http');
const path = require('path')



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
      



      

  

} ).listen(9000);


