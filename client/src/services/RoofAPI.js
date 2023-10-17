const getAllRoof = async () => {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(),
        }
        const response = await fetch('http://localhost:3014/roof', options)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

const getRoofById = async (id) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(),
        }
        const response = await fetch(`http://localhost:3014/roof/${id}`, options)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

export default {
    getAllRoof,
    getRoofById
}
