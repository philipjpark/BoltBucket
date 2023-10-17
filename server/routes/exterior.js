import express from 'express'
import ExteriorController from '../controllers/exterior.js'

const router = express.Router()

router.get('/', ExteriorController.getExterior)
router.get('/:exteriorId', ExteriorController.getExteriorById)

export default router