const getAllWheels = async () => {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(),
        }
        const response = await fetch('http://localhost:3014/wheels', options)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

const getWheelsById = async (id) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(),
        }
        const response = await fetch(`http://localhost:3014/wheels/${id}`, options)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

export default {
    getAllWheels,
    getWheelsById,
}
