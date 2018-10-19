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

app.get('/home', (req, res) => {
    res.render('about.hbs', {
        pageTitle: "Home Page",
        welcomeMessage: "Hello from Home",
        currentYear: new Date().getFullYear()
    })
});

app.get('/about', (req, res)=> { 
    res.render('about.hbs', {
        pageTitle: "About this page",
        currentYear: new Date().getFullYear()
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});