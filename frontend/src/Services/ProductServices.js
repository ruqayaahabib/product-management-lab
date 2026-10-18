import axios from "axios"

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}`;

async function fetchAllProducts(){
    const response = await axios.get(`${BASE_URL}/products`)
    return response.data
}

async function fetchOneProduct(productId) {
    const response = await axios.get(`${BASE_URL}/products/${productId}`)
    return response.data    
}

async function createNewProduct(newProductBody) {
    const response = await axios.post(`${BASE_URL}/products`, newProductBody)
    return response.data
}

async function updateProduct(productId, productBody) {
    const response = await axios.put(`${BASE_URL}/products/${productId}`, productBody)
    return response.data
}

async function deleteProduct(productId) {
    const response = await axios.delete(`${BASE_URL}/products/${productId}`)
    return response.data
}


async function fetchLowStock(){
    const response = await axios.get(`${BASE_URL}/products/low-stock`)
    return response.data
}

async function fetchStatistics() {
    const response = await axios.get(`${BASE_URL}/products/statistics`)
    return response.data
}

export{
    fetchAllProducts,fetchOneProduct,
    createNewProduct,updateProduct,deleteProduct,
    fetchLowStock, fetchStatistics

}