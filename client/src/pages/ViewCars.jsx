import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import carapi from '../services/carapi'

const ViewCars = () => {

    const [cars, setCars] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const carData = await carapi.getAllCars()
                setCars(carData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])
    
    return (
        <div>
            {cars.map((car, index) => (
                <article key={index}>
                    <header>{'Car Name: ' + car.name}</header>
                            <p>{'Exterior: ' + car.exterior}</p>
                            <p>{'Interior: ' + car.interior}</p>
                            <p>{'Roof: ' + car.roof}</p>
                            <p>{'Wheels: ' + car.wheels}</p>
                            <p>{'Price: ' + car.pricepoint}</p>
                            <Link to={`/customcars/${car.id}`}>Car Details</Link>
                </article>
            ))}
        </div>
    )
}

export default ViewCars