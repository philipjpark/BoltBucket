import React, { useState, useEffect } from 'react';
import '../App.css'
import { Link, useParams } from 'react-router-dom'
import carapi from '../services/carapi'
import exteriorAPI from '../services/exteriorAPI'
import interiorAPI from '../services/interiorAPI'
import roofAPI from '../services/roofAPI'
import wheelsAPI from '../services/wheelsAPI'

const EditCar = () => {

    const [car, setCar] = useState({id: 0, name: '', exterior: '', interior: '', roof: '', wheels: '', pricepoint: '' })
    const [exterior, setExterior] = useState([])
    const [interior, setInterior] = useState([])
    const [roof, setRoof] = useState([])
    const [wheels, setWheels] = useState([])

    const { id } = useParams();
    // console.log('ID:', id);
    
    const editCar = async () => {
        try {
            // Define the URL or endpoint for updating car details on your backend
            const url = `/car/${id}`; // Modify this based on your backend API

            const response = await fetch(url, {
                method: 'PUT', // Use the appropriate HTTP method (e.g., PUT or PATCH)
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(car)
            });

            if (response.ok) {
                // Successfully updated car details
                console.log('Car updated successfully.');
                // Redirect to the car details page or any other appropriate action
                history.push(`/customcars/${id}`);
            } else {
                // Handle errors when the response status code is not in the 200 range.
                console.error('Failed to update car.');
            }
        } catch (error) {
            // Handle network or fetch errors.
            console.error('An error occurred:', error);
        }
    };

    useEffect(() => {
        const fetchCarById = async () => {
            const response = await fetch(`/car/${id}`)
            const data = await response.json()
            setCar(data)
        }
        fetchCarById()
    }, [id])

    useEffect(() => {
        (async () => {
            try {
                const exteriorData = await exteriorAPI.getAllExterior()
                setExterior(exteriorData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const interiorData = await interiorAPI.getAllInterior()
                setInterior(interiorData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const roofData = await roofAPI.getAllRoof()
                setRoof(roofData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])

    useEffect(() => {
        (async () => {
            try {
                const wheelsData = await wheelsAPI.getAllWheels()
                setWheels(wheelsData)
            }
            catch (error) {
                throw error
            }
        }) ()
    }, [])
      

    return (
        <div className='CreateCar'>
            <center><h2>Edit or Delete the Car</h2></center>

            <label>
            Exterior
            <select 
                value={car.exterior} 
                onChange={(e) => setCar({
                    ...car, // Copy the existing car state
                    exterior: e.target.value // Update the exterior property
                    })}>
                {exterior.map((  
                    exterior, index) => (
                    <option key={index} value={exterior.name}> {exterior.name} {exterior.pricepoint} {/* {exterior.image} */}</option>
                ))}
            </select>
            </label>
            <br />

            <label>
            Interior
            <select 
                value={car.interior} onChange={(e) => setCar({
                    ...car, interior: e.target.value
                    })}>
                {interior.map((
                    interior, index) => (
                    <option key={index} value={interior.name}> {interior.name} {interior.pricepoint}{/* {interior.image} */} </option>
                ))}
            </select>
            </label>
            <br />

            <label>
            Roof
            <select 
                value={car.roof} 
                onChange={(e) => setCar({
                    ...car, roof: e.target.value
                    })}>
                {roof.map((
                    roof, index) => (
                    <option key={index} value={roof.name}> {roof.name} {roof.pricepoint} {/* {interior.image} */} </option>
                ))}
            </select>
            </label>
            <br />


            <label>
            Wheels
            <select 
                value={car.wheels} 
                onChange={(e) => setCar({
                    ...car, wheels: e.target.value
                    })}>
                {wheels.map((
                    wheels, index) => (
                    <option key={index} value={wheels.name}> {wheels.name} {wheels.pricepoint} {/* {interior.image} */} </option>
                ))}
            </select>
            </label>
            <br/>

        <label>
        Price 
        <input type="text" name="pricepoint" value={car.pricepoint} 
            onChange={(e) => setCar({ 
                ...car, pricepoint: e.target.value })}>            
        </input>
        </label>
        <br/>

        <label>
         Name for your car 
        <input type="text" id="name" name="name" placeholder='Name your car' value={car.name} 
            onChange={(e) => setCar({ 
                ...car, name: e.target.value })}>
        </input>
        </label>
        <br/>

        <input type="submit" value="Edit" onClick={editCar}></input>          
        <input type="submit" value="Delete" onClick={deleteCar}></input>  

    </div>
    )
};

export default EditCar