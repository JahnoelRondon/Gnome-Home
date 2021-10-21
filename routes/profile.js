import {Router} from 'express';
import * as profileCtrl from '../controllers/profile.js'

const router = Router();

router.get('/:profileId', profileCtrl.index)

router.delete('/:reviewId', profileCtrl.delete)

export {
    router
}