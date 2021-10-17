import {Myth} from '../models/myth.js'


function index(req, res){
    console.log('index');
    // do a find here 
    res.render('myths/index', {
        title: 'Myths'
    })
}

function newMyth(req, res){
    Myth.create(req.body, function(err, myth){
        res.redirect('/myths')
    })
}

export {
    index,
    newMyth as new
}