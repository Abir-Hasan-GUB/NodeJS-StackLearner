const express = require('express');
const morgan = require('morgan');

const contactRoutes = require('./contactRoutes')


const app = express();
app.use(morgan('dev'))
app.use(express.urlencoded({extended: true})) // for recive form data
app.use(express.json()); // for recive json data

app.use('/contacts', contactRoutes)

app.get('*', (req, res) => {
    res.end(`<h1>Please Use Correct Route...</h1>`)
})



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('Server is Running ' + PORT);
})