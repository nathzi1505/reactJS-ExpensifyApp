const express = require('express')
const path = require('path')

const app = express()
const publicPath = path.join(__dirname, '..', 'public')
const port = 3000 || process.env.port

app.use(express.static(publicPath))

app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'))
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})