const express   = require('express');
const hbs       = require('hbs');

var app = express();

hbs.registerPartials(__dirname + "/views/partials")
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('upperit', (teks) => {
    return teks.toUpperCase();
});

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
    res.render('home.hbs', {
        pageTitle: "Home Page",
        welcomeMessage: "Hello from Home"
    })
});

app.get('/about', (req, res)=> { 
    res.render('about.hbs', {
        pageTitle: "About this page",
        welcomeMessage: "hello i'm very excited!"
    });
});

app.listen(3000, () => {
    console.log('Server is up on port 3000');
});