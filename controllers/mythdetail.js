import { Myth } from './../models/myth.js'

function show(req, res){
    Myth.findById(req.params.id)
    .then(myth => {
        res.render("mythdetail/show", {
            title: `Folktale Info`,
            myth
        })
    })
}


export {
    show
}