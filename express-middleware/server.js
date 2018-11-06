const express   = require('express');
const hbs       = require('hbs');
const fs        = require('fs')

var app = express();
app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + "/views/partials")
app.set('view engine', 'hbs');

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear();
});

hbs.registerHelper('upperit', (teks) => {
    return teks.toUpperCase();
});

app.use( (req, res, next)=> {
    var sekarang    = new Date().toString();
    var log         = `${sekarang}: ${req.method} | ${req.url}`;
    console.log(log);
    fs.appendFile('server.log', log + '\n', (err) => {
        if(err)
        {
            console.log('unable to append server.log');
        }
    });
    next();
});

/**
 * when maintenance is used, any page after the maintenance.hbs
 * will not displayed. such as any page in the public folder
 * and also in views folder.
 * 
 * We can deactivated maintenance mode by removing or disabling
 * this maintenance.hbs page.
 */
app.use((req, res, next) => {
    res.render('maintenance.hbs');
});

/**
 * this page is moved from above maintenance.hbs. so maintenance.hbs
 * will displayed even user visit this static page
 */
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('home.hbs', {
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