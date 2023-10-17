const getAllInterior = async () => {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(),
        }
        const response = await fetch('http://localhost:3014/interior', options)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

const getInteriorById = async (id) => {
    try {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(),
        }
        const response = await fetch(`http://localhost:3014/Interior/${id}`, options)
        const data = await response.json()
        return data
    }
    catch (error) {
        throw error
    }
}

export default {
    getAllInterior,
    getInteriorById,
}
