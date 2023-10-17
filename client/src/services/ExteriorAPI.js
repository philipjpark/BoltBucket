const getAllExterior = async () => {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(),
        }
        const response = await fetch('http://localhost:3014/exterior', options)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

const getExteriorById = async (id) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(),
        }
        const response = await fetch(`http://localhost:3014/exterior/${id}`, options)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

export default {
    getAllExterior,
    getExteriorById
}
