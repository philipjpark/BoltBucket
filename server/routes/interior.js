import express from 'express'
import InteriorController from '../controllers/interior.js'

const router = express.Router()

router.get('/', InteriorController.getInterior)
router.get('/:interiorId', InteriorController.getInteriorById)

export default router