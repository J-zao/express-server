const express = require('express');

var fs = require('fs')

const app = express();

const port = 8080;

app.listen(port, function (err) {
    if (err) throw err;
    console.log('Server is up and running on port %s', port)
    
  });

app.get('./employees', (req, res) => {
    
    fs.readFile('./employees.son', (err, data) => {
        console.log("Error while reading json file")
    })

    res.json(data);
})