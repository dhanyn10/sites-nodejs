const express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

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

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});