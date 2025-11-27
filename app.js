const express = require('express')
const morgan = require('morgan')

const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.listen(3000)

app.get('/', (req, res) => {
    res.write('connected2')
    res.end()
})