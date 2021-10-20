import {Router} from "express";
import * as mythdetailCtrl from '../controllers/mythdetail.js'

const router = Router();


router.get('/:id', isLoggedIn, mythdetailCtrl.show)

router.post('/:id', isLoggedIn, mythdetailCtrl.create)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

export {
    router
}