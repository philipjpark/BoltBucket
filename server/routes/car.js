import express from 'express'
import CarController from '../controllers/car.js'

const router = express.Router()

router.get('/', CarController.getCar)
router.get('/:carId', CarController.getCarById)
router.post('/', CarController.createCar)
router.patch('/:carId', CarController.updateCar)
router.delete('/:carId', CarController.deleteCar)

export default router
