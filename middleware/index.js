const express = require('express')
const app = express()
const port = 8080 || process.env.PORT
const morgan = require('morgan')
app.use(morgan('dev'))

const customMiddleware = (req, res, next) =>{
   console.log('Base URL: ' + req.url)
   next()
}

app.listen(port, (req, res) => {
    console.log('Listen from server & port is ' + port)
})

app.get('/help', customMiddleware, (req, res)=>{
    res.end(`<h1>This is Help page</h1>`)
})

app.get('/', (req, res) => {
    res.end(`<h1>Listen from Server</h1>`)
})

app.get('*', customMiddleware,  (req, res) => {
    res.end(`<h1>Error 404 => Page not found ! </h1>`)
})