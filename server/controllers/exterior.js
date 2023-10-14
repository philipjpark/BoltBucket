import { pool } from '../config/database.js'

const getExterior = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM exterior ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getExteriorById = async (req, res) => {
  try {
    const exteriorId = req.params.exteriorId
    const selectQuery = `SELECT name, pricePoint, image FROM exterior WHERE id = ${exteriorId}`
    const results = await pool.query(selectQuery)

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

export default {
  getExterior,
  getExteriorById
}
