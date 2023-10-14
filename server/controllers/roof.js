import { pool } from '../config/database.js'

const getRoof = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM roof ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getRoofById = async (req, res) => {
  try {
    const roofId = req.params.roofId
    const selectQuery = `SELECT name, pricePoint, image FROM roof WHERE id = ${roofId}`
    const results = await pool.query(selectQuery)

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

export default {
  getRoof,
  getRoofById
}
