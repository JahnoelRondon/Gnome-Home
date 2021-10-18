import {Myth} from '../models/myth.js'

import {Pantheon} from '../models/pantheon.js'

function index(req, res){
    // do a find here 
    if (req.params.pantheon) {
        let item = req.params.pantheon;
        item = item[0].toUpperCase() + item.slice(1);

        Myth.find({pantheon: item})
        .then(myths => {
            res.render('myths/index', {
                title: `${item} Myths`,
                myths
            })            
        })
        .catch(err => {
            console.log(err)
        }) 

    } else {
       Myth.find({})
        .then(myths => {
            res.render('myths/index', {
                title: 'Myths',
                myths
            })            
        })
        .catch(err => {
            console.log(err)
        }) 
    }

}

function newMyth(req, res){
    res.render('myths/new', {
        title: 'Create'
    })
}

function createMyth(req, res){

    Myth.create(req.body, function(err, myth){
        res.redirect('/')
    })
}

function createPantheon(req, res){

    Pantheon.create(req.body, function(err, myth){
        res.redirect('/')
    })
}

export {
    index,
    createMyth,
    newMyth as new,
    createPantheon
}

