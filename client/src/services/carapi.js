const getAllCars = async () => {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await fetch('http://localhost:3014/car', options);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

const getCarById = async (id) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        const response = await fetch(`http://localhost:3014/car/${id}`, options);
        const data = await response.json();
        return data;
    } catch (error) {
        throw error;
    }
};

const createCar = async (car) => {
    try {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        };
        const response = await fetch('http://localhost:3014/car', options);
        if (response.ok) {
            // Successful response, do something if needed.
            // For example, redirect to another page.
            window.location = '/';
        } else {
            // Handle errors here.
            console.error('Failed to create car.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

const updateCar = async (id, car) => {
    try {
        const options = {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(car)
        };
        const response = await fetch(`http://localhost:3014/car/${id}`, options);
        if (response.ok) {
            // Successful response, do something if needed.
            // For example, redirect to another page.
            window.location = '/';
        } else {
            // Handle errors here.
            console.error('Failed to update car.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

const deleteCar = async (id) => {
    try {
        const options = {
            method: 'DELETE'
        };
        const response = await fetch(`http://localhost:3014/car/${id}`, options);
        if (response.ok) {
            // Successful response, do something if needed.
            // For example, redirect to another page.
            window.location = '/';
        } else {
            // Handle errors here.
            console.error('Failed to delete car.');
        }
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

export default {
    getAllCars,
    getCarById,
    createCar,
    updateCar,
    deleteCar
};


// const getAllCars = async () => {
//     try {
//         const options = {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(),
//         }
//         const response = await fetch('http://localhost:3014/car', options)
//         const data = await response.json()
//         return data
//     }
//     catch (error) {
//         throw error
//     }
// }

// const getCarById = async (id) => {
//     try {
//         const options = {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(),
//         }
//         const response = await fetch(`http://localhost:3014/car/${id}`, options)
//         const data = await response.json()
//         return data
//     }
//     catch (error) {
//         throw error
//     }
// }

// const createCar = (car) => {
//     car.preventDefault()

//     const options = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(car),
//     }

//     fetch('http://localhost:3014/car', options)
//     window.location = '/'
    
// }

// const updateCar = (car) => {
//     car.preventDefault()

//     const options = {
//         method: 'PATCH',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(car),
//     }

//     fetch(`http://localhost:3014/car/${id}`, options)
//     window.location = '/'
    
// }

// const deleteCar = (car) => {
//     car.preventDefault()

//     const options = {
//         method: 'DELETE'
//     }

//     fetch(`http://localhost:3014/car/${id}`, options)
//     window.location = '/'

    
// }

// export default {
//     getAllCars,
//     getCarById,
//     createCar,
//     updateCar,
//     deleteCar
// }
