const express = require('express')
const app = express()
const port = 3001
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')))
app.post('/clicked', (req, res) => {
    const dir = './user-profiles.js'

    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir)
      }
      const returning = JSON.stringify(req.body)
      res.send(returning)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))