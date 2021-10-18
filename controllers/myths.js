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

    addToPantheon();

    Myth.create(req.body, function(err, myth){
        res.redirect('/')
    })
    
}

function addToPantheon(){
    
}

function createPantheon(req, res){

    Pantheon.create(req.body, function(err, myth){
        res.redirect('/')
    })
}


function consoleTest(req, res){
    // Testing 1
    // Myth.find({pantheon: 'Greek'}, function(err, mythType){
    //     // must check if mythType document does not already exist in pantheon model array before pushing 
    //     // look at each doc and see if does not already exist in pantheon array
    //     console.log(mythType)
    //     mythType.forEach(function(type){
    //         console.log(type.name); 
    //     })
    // })

    // Greek.find({}, function(err, docs){
    //     console.log(`Docs ${docs}`)

    // })
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