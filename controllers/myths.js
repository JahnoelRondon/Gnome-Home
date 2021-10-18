import {Myth} from '../models/myth.js'

import {Pantheon} from '../models/pantheon.js'

function index(req, res){
    // do a find here 
    res.render('myths/index', {
        title: 'Myths'
    })
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
    
    // addToPantheon();
}

// function addToPantheon(){
//     Pantheon.find({ pantheon: 'Greek'}, function(err, pantheon){
//         Myth.find({ pantheon : 'Greek'}, function(err, myth){
            
//         })
//     })
// }

function createPantheon(req, res){

    Pantheon.create(req.body, function(err, myth){
        res.redirect('/')
    })
}


function consoleTest(req, res){

    Pantheon.find({pantheon: 'Greek'}, function(err, doc){
        // push onto this 
        console.log(doc[0].myths)
    })
    res.redirect('/myths/new')
}

export {
    index,
    createMyth,
    newMyth as new,
    createPantheon,
    consoleTest
}