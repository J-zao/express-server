//require express

const express = require('express');

//create object and add port

const app = express();

const port = process.env.port | 8080;

//Create server to listen on port
app.listen(port, (err) => {
    if (err){
        throw err;
        console.log('Server is up and running on port %s', port)
    };
    
});

//Defind default route with express(  http://localhost:8080)

app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/login.html');
});

//http://localhost:8080/login

app.post('/login', (req, res) => {
    res.end("You are assessing my assignment!!");
})

app.get('/users', (req, res) =>{
res.json(['Lemy', 'Jack', 'Nash', 'Josh']);
});

app.get('/products', (req, res) => {
    fs.readFile('./products.json', (err, data) => {
        if (err)
             console.log("Error while reading json file")
        res.json(JSON.parse(data));
    })
    
});













