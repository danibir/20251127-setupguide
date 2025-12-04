const express = require('express')
const morgan = require('morgan')

const app = express()

const rou_default = require('./router/rou-default')

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.listen(3000)

app.use(rou_default)