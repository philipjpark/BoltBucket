import { pool } from '../config/database.js'

const getWheels = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM wheels ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getWheelsById = async (req, res) => {
  try {
    const wheelsId = req.params.wheelsId
    const selectQuery = `SELECT name, pricePoint, image FROM wheels WHERE id = ${wheelsId}`
    const results = await pool.query(selectQuery)

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

export default {
  getWheels,
  getWheelsById
}
