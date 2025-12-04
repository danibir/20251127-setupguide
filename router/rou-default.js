const express = require('express')

const controller = require('../controller/con-default')

const router = express.Router()


router.get('/', controller.index_get)


module.exports = router