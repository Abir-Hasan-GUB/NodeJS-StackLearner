const express = require('express');
const app = express();
const morgan = require('morgan');

app.set('view engine', 'ejs');
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/home', (req, res) => {
    res.render('index' , 
    {
        msg: ' [Home Page]', 
        title: 'Home Page', 
        postTitle: 'New Post...', 
        status: true 
    })
})

app.get('/about', (req, res) => {
   res.render('about', {title: 'About Page'})
})

app.get('/blog', (req, res) =>{
    res.render('blog', {title: 'Blog Page'})  
})


app.get('/', (req, res) => {
    res.end(`<h1>Welcome from Server!</h1>`);
})

const port = process.env.PORT || 3000;
app.listen(port, ()=> {
    console.log('listening on port: ' + port);
});