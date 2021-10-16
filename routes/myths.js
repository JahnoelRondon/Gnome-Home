import {Router} from "express";
import * as mythsCtrl from './../controllers/myths.js'

const router = Router();

router.get('/',isLoggedIn,  mythsCtrl.index)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

export {
    router
}