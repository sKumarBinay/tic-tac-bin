const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const path = require('path')
const fs = require('fs')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')))
app.post('/clicked', (req, res) => {
    const dir = './appData.txt'
    
    if (!fs.existsSync(dir)) {
      console.log(req.profile)
      fs.writeFileSync(`${dir}`, req.profile, 'utf-8')
      }
      const returning = JSON.stringify(req.body)
      res.send(returning)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))