import { Myth } from './../models/myth.js';
import {MythReview} from './../models/mythreview.js';

function show(req, res){
    Myth.findById(req.params.id)
    .populate({
        path: 'reviews',
        populate: {
            path: 'author'
        }
    })
    .then(myth => {
        res.render("mythdetail/show", {
            title: `Folktale Info`,
            myth
        })
    })
}

function create(req, res){

    req.body.myth = req.params.id
    req.body.author = req.user.profile._id
    
    console.log(req.body)
    // 
    MythReview.create(req.body)
    // review is the specified review created at this time
    .then(review => {
        Myth.findById(req.params.id)
        .then(myth => {
//review(s) on the mythmodel   //review that was just created
            myth.reviews.push(review._id)
            myth.save()
            .then(() => {
                res.redirect(`/mythdetail/${req.params.id}`)    
            })
        })
        
    })
}

export {
    show,
    create
}