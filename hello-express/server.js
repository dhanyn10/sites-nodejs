const express = require('express');

var app = express();

app.get('/', (req, res)=> {
    
    res.send('Hello Express!');
});
app.get('/json', (req, res)=> {
    res.send({
        name: 'Dhan',
        likes: [
            'kode',
            'play'
        ]
    });
});

app.listen(3000);