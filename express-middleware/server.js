const express   = require('express');
const hbs       = require('hbs');

var app = express();
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use( (req, res, next)=> {
    var sekarang = new Date().toString();
    
    console.log(`${sekarang}: ${req.method} | ${req.url}`)
    next();
});
app.get('/', (req, res) => {
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