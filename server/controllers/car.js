import { pool } from '../config/database.js'

const getCar = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM car ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getCarById = async (req, res) => {
  try {
    const carId = req.params.carId
    const selectQuery = `SELECT name, exterior, interior, roof, wheels, pricePoint FROM car WHERE id = ${carId}`
    const results = await pool.query(selectQuery)

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}


const createCar = async (req, res) => {
  try {
    const { exterior, interior, roof, wheels } = req.body 
    const results = await pool.query(`
      INSERT INTO car (name, exterior, interior, roof, wheels, pricePoint)
      VALUES($1, $2, $3, $4, $5, $6)
      RETURNING *`,
      [exterior, interior, roof, wheels]
    )
    res.status(201).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const updateCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const { exterior, interior, roof, wheels } = req.body
    const results = await pool.query(`
      UPDATE car SET name = $1, exterior = $2, interior = $3, roof = $4, wheels = $5, pricePoint = $6, WHERE id = $8`,
      [exterior, interior, roof, wheels, pricePoint, id]
    )
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

const deleteCar = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const results = await pool.query('DELETE FROM gifts WHERE id = $1', [id])
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

export default {
  getCar,
  getCarById,
  createCar,
  updateCar,
  deleteCar
}
