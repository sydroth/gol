import express from 'express'
import routes from './routes'
import pug from 'pug'
import path from 'path'
import bodyParser from 'body-parser'

const server = express()


//view engine setup
server.set('views', path.join(__dirname, 'views'))
server.set('view engine', 'pug')

// middleware
server.use(express.static(__dirname+'/public'))
server.use(bodyParser.urlencoded({ extended: true }))


// routes
server.use('/', routes)


// leave this at the end
server.listen(process.env.PORT || 3000)
