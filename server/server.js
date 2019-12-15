const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')))
app.post('/clicked', (req, res) => {
    const dir = './appData.js'
    
    
      console.log(req.body.profile)
      fs.appendFileSync(`${dir}`, ',' + JSON.stringify(req.body), 'utf-8')
      
      const returning = JSON.stringify(req.body)
      res.send(returning)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))