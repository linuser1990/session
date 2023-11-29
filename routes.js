const express = require('express')
const router = express.Router()
const controller = require('./controllers')
const isAuthenticated = require('./authMiddleware')

router.get('/',controller.home)
router.get('/dashboard',isAuthenticated,controller.dashboard)
router.get('/viewAdd',isAuthenticated,controller.viewAdd)
router.get('/logout',controller.logout)
router.post('/verificaLogin',controller.verificaLogin)
router.post('/',controller.salvar)
router.put('/:codigo',controller.update)
module.exports = router