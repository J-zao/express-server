const express = require('express');

const app = express();

const port = 8080;

app.listen(port, (err) => {
    if (err){
        throw err;
        console.log('Server is up and running on port %s', port)
    };
    
});

//http://localhost:8080

app.get('/', (req, res) =>{
    res.end("You are assessing my assignment!!");
});

//http://localhost:8080/login

app.post('/login', (req, res) => {
    res.end("You are assessing my assignment!!");
})

app.get('/users', (req, res) =>{
res.json(['Lemy', 'Jack', 'Nash', 'Josh']);
});
