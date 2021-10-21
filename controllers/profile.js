import {Profile} from './../models/profile.js';
import {MythReview} from './../models/mythreview.js';

function index(req, res){
    // Profile.findById()
    Profile.findById(req.params.profileId)
    .populate({
        path: 'reviews',
        populate: {
            path: 'myth'
        }
    })
    .then(profile => {
        res.render('profile/index', {
            title: 'Profile Page',
            profile
        })        
    })

}

function deleteReview(req, res){
    console.log(req.params)
    console.log(req.user.profile._id)

    // delete the review from the collection
    MythReview.findByIdAndDelete(req.params.reviewId)
    .then(() => {
        // delete the review from the profile array
        Profile.findById(req.user.profile._id)
        .then(profile => {
            profile.reviews.remove({_id: req.params.reviewId})
            profile.save()
        })
    })
    .then(() => {
        res.redirect(`/profile/${req.user.profile._id}`)
    })
    
}
export {
    index,
    deleteReview as delete
}