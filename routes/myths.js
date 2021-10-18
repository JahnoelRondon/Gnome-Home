import {Router} from "express";
import * as mythsCtrl from '../controllers/myths.js'

const router = Router();

router.get('/',isLoggedIn,  mythsCtrl.index)
router.get('/new', isLoggedIn, mythsCtrl.new)

// get rid of 
router.get('/test', isLoggedIn, mythsCtrl.consoleTest)

router.post('/', isLoggedIn, mythsCtrl.createMyth)
router.post('/pantheon', isLoggedIn, mythsCtrl.createPantheon)

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect("/auth/google");
}

export {
    router
}