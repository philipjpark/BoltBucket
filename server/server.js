import express from 'express'
import path from 'path'
import favicon from 'serve-favicon'
import dotenv from 'dotenv'
import cors from 'cors'

// import the router from your routes file
import exteriorRouter from './routes/exterior.js'
import interiorRouter from './routes/interior.js'
import roofRouter from './routes/roof.js'
import wheelsRouter from './routes/wheels.js'
import carRouter from './routes/car.js'

dotenv.config()

const PORT = process.env.PORT || 3014
// const PORT = process.env.PORT || 3006

const app = express()

app.use(express.json())

app.use(cors())

if (process.env.NODE_ENV === 'development') {
    app.use(favicon(path.resolve('../', 'client', 'public', 'lightning.png')))
}
else if (process.env.NODE_ENV === 'production') {
    app.use(favicon(path.resolve('public', 'lightning.png')))
    app.use(express.static('public'))
}

// specify the api path for the server to use
app.use('/exterior', exteriorRouter);
app.use('/interior', interiorRouter)
app.use('/roof', roofRouter)
app.use('/wheels', wheelsRouter)
app.use('/car', carRouter)

if (process.env.NODE_ENV === 'production') {
    app.get('/*', (_, res) =>
        res.sendFile(path.resolve('public', 'index.html'))
    )
}

app.listen(PORT, () => {
    console.log(`🚀 server listening on http://localhost:${PORT}`)
})