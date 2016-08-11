'use strict'

const env        = process.env.NODE_ENV || 'development'
const DEV        = env==='development'
const dotenv     = require('dotenv').config()
const gameroute  = require('./routes/gameroute.js')
const express    = require('express')
const morgan     = require('morgan')
const path       = require('path')
const bodyparser = require('body-parser')
const app        = express()


const port       = process.env.PORT || 3000

app.set('superSecret', 'my super secret word')

app.use(morgan( DEV ? 'dev' : 'common'))

app.use(express.static(path.join(__dirname,'dist')))

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended: true}))

app.use('/game', gameroute)

app.listen(port,()=>{
  console.log('server up on', port)
})
