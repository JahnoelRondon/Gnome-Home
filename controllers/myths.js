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
        // push myth to one of the 3 pantheons based on its string 

        res.redirect('/myths')
    })
}

export {
    index,
    newMyth as new
}