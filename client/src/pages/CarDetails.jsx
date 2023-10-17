import React from 'react'
import '../App.css'
import carapi from '../services/carapi'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

const CarDetails = () => {
    const [car, setCar] = useState([])
    const { id } = useParams();

    useEffect(() => {
        (async () => {
            try {
                const carData = await carapi.getCarById(id);
                setCar(carData);
            } catch (error) {
                console.error('Error fetching car details:', error);
            }
        })();
    }, [id]);


    const deleteCar = async () => {
        try {
            await carapi.deleteCar(id);
            // Redirect after successful deletion.
            window.location = '/customcars';
        } catch (error) {
            console.error('Error deleting car:', error);
        }
    };
    
    return (
        <div>
            <article>
                <header><h2>Name: {car.name}</h2></header>
                <div>
                    <p>Exterior: {car.exterior}</p>
                    <p>Interior: {car.interior}</p>
                    <p>Roof: {car.roof}</p>
                    <p>Wheels: {car.wheels}</p>
                    {/* <p>Price: ${car.pricepoint}</p> */}
                    {/* <Link to={`/edit/${car.id}`}>Edit & Delete</Link> */}
                    {/* <input type="submit" value="Delete" onClick={deleteCar}></input> */}
                    <button className='deleteButton' onClick={deleteCar}>Delete</button>
                </div>
            </article>
        </div>
    )
}

export default CarDetails