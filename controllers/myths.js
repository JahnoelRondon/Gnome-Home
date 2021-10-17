import {Myth} from '../models/myth.js'

function index(req, res){
    console.log('index');
    res.render('myths/index', {
        title: 'Myths'
    })
}

export {
    index
}