import express from 'express'
import RoofController from '../controllers/roof.js'

const router = express.Router()

router.get('/', RoofController.getRoof)
router.get('/:roofId', RoofController.getRoofById)

export default router