import { Myth } from './../models/myth.js';
import {MythReview} from './../models/mythreview.js';

function show(req, res){
    Myth.findById(req.params.id)
    .then(myth => {
        res.render("mythdetail/show", {
            title: `Folktale Info`,
            myth
        })
    })
}

function create(req, res){
    req.body.author = req.user.profile._id
    req.body.myth = req.params.id
    
    console.log(req.body)
    // 
    MythReview.create(req.body)
    .then(review => {
        res.redirect(`/mythdetail/${req.params.id}`)
    })
}

export {
    show,
    create
}