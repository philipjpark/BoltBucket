import React, { useState, useEffect } from 'react';
import '../App.css'
import exteriorAPI from '../services/exteriorAPI'
import interiorAPI from '../services/interiorAPI'
import roofAPI from '../services/roofAPI'
import wheelsAPI from '../services/wheelsAPI'

const CreateCar = () => {

    const [car, setCar] = useState({id: 0, name: '', exterior: '', interior: '', roof: '', wheels: '', pricepoint: ' 65000' })
    const [exterior, setExterior] = useState([])
    const [interior, setInterior] = useState([])
    const [roof, setRoof] = useState([])
    const [wheels, setWheels] = useState([])


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

    const createCar = async (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
      
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(car)
        };
      
        try {
          const response = await fetch('http://localhost:3014/car', options);
          window.location = '/customcars'
          if (response.ok) {
            // The request was successful, you can perform any further actions here.
            console.log('Car created successfully.');
            // window.location = '/customcars'; // Redirect to the homepage or another page if needed
          } else {
            // Handle errors when the response status code is not in the 200 range.
            console.error('Failed to create car.');
          }
        } catch (error) {
          // Handle network or fetch errors.
          console.error('An error occurred:', error);
        }
      };
      

    return (
        <div className='CreateCar'>
            <center><h2>Add a Car</h2></center>

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

        <input type='submit' value='Submit' onClick={createCar} /> 

    </div>
    )
};

export default CreateCar