import { MythReview } from "../models/mythreview.js";

function edit(req, res){
    MythReview.findById(req.params.reviewId)
    .then(review => {
        res.render('reviews/edit', {
            title: 'Editor',
            review
        })
    })
}

function update(req, res){
    MythReview.findByIdAndUpdate(req.params.reviewId, req.body, {next: true})
    .then(() => {
        res.redirect(`/profile/${req.user.profile._id}`)
    })
}

export {
    edit,
    update
}