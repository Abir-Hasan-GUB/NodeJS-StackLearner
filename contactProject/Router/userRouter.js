const userRouter = router = require('express').Router();

userRouter.get('/posts', (req, res) => {
    res.end("This all post from the user")
})

userRouter.get('/comments', (req, res) => {
    res.end("This all comment from the user")
})

userRouter.post('/upload', (req, res) => {
   res.json(req.body)
})

module.exports = userRouter