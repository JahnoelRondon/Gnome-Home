
function index(req, res){
    res.render('profile/index', {
        title: 'Profile Page'
    })
}

export {
    index
}