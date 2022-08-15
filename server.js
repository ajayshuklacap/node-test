const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./app/note.routes')
const routesc = require('./app/note.controller')

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('App is working'))

routes.get('/notes', routesc.getData);

app.use('/api', routes)

app.listen(3000, () => console.log('Example app listening on port 3000!'))

module.exports = {
  app
}