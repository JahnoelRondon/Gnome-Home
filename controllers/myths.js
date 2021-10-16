
function index(req, res){
    console.log('index');
    res.render('myths/index', {
        title: 'Myths',
        user: req.user
    })
}

export {
    index
}