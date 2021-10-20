import {Profile} from './../models/profile.js';


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

export {
    index
}