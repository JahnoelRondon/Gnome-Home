import { Router } from 'express'
import { Pantheon } from './../models/pantheon.js'

const router = Router()

router.get('/', function (req, res) {
  Pantheon.find({}, function(err, pantheons){
    res.render('index', { 
        title: 'Gnome Home', 
        user: req.user ? req.user : null,
        pantheons
      })
  })
  
})

export {
  router
}