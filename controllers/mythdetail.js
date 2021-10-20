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
    MythReview.create(req.body)
    .then(review => {
        res.redirect('/myths')
    })
}

export {
    show,
    create
}