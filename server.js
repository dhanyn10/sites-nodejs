const express   = require('express');
const hbs       = require('hbs');

var app = express();

app.set('view engine', 'hbs');

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

app.get('/about', (req, res)=> { 
    res.render('about.hbs');
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});