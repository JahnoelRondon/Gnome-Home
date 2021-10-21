import {Router} from 'express'
import * as reviewsCtrl from './../controllers/reviews.js'

const router = Router();

router.get('/:reviewId/edit', reviewsCtrl.edit)

router.put('/:reviewId', reviewsCtrl.update)

export {
    router
}