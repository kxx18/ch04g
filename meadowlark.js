var express = require('express');
var app = express();

var handlebars = require('express3-handlebars')
    .create({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', process.env.PORT || 3000);
//same effect as creating a route for each static file you want to deliver that renders and returns it to the client
//middleware provides modularization making it easier to handle requests
app.use(express.static(__dirname + '/public'));

var fortunes = [
    "Conquer your or they will conquer you.",
    "River need springs",
    "Do not fear what you don't know",
    "Whenever possible, keep it simple",
];

//app.get // we add routes in express js
//takes two params: path, and a callback function
app.get('/', (req, res) => {
    res.render('home');
});


app.get('/about', (req,res)=>{
    var randomFortune = fortunes[Math.floor(Math.random() * fortunes.length)];
	res.render('about', { fortune: randomFortune });

});

//app.use-- .use express is the method by which express add middleware
//middleware-think of it as as a catch-all handler for anything that didn't get matched by a rout
//custom 404 page
//404 catch-all handler (middleware)
app.use((req, res) => {
    res.status(404);
    res.render('404');
});

//500 error handler (middleware)
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), () => {
    console.log('Express started on http://localhost:' + app.get('port') + '; press CTRL-C to terminate');
})