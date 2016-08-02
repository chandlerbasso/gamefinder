const express     = require('express')
const path        = require('path')
const logger      = require('morgan')
const bodyparser  = require('body-parser')
const app         = express()
const port        = process.env.PORT || 3000

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname, 'public')))

app.use(logger('dev'))
app.use(bodyparser.json())

app.listen(port, function(){
  console.log('youre up an runnin on ' + port )
})
