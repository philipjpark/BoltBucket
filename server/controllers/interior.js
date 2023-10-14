import { pool } from '../config/database.js'

const getInterior = async (req, res) => {
  try {
    const results = await pool.query('SELECT * FROM interior ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

const getInteriorById = async (req, res) => {
  try {
    const interiorDataId = req.params.interiorId
    const selectQuery = `SELECT name, pricePoint, image FROM interior WHERE id = ${interiorId}`
    const results = await pool.query(selectQuery)

    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error.message } )
  }
}

export default {
  getInterior,
  getInteriorById
}
