const express = require('express');
const app = express();
const expbs = require('express-handlebars');

app.engine('handlebars', expbs());
app.set('view engine', 'handlebars');


//Routing

app.get('/', (req, res) => {
    res.render('index');
});

// About
app.get('/about', (req, res) => {
    res.render('about');
})
app.listen(3000, () => {
    console.log('Server listening on 3000');
});