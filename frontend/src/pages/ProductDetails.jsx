import { useState, useEffect } from "react"
import axios from "axios"
import { Link, useParams, useNavigate } from "react-router"
import { fetchOneProduct } from "../Services/ProductServices"
import {deleteProduct} from "../Services/ProductServices"

function ProductDetails() {
  const [product, setProduct] = useState(null)

  const {productId} = useParams()
  
  const navigate = useNavigate()


  async function getProduct(){
    const response = await fetchOneProduct(productId)
    setProduct(response)
  }

  async function HandleDeleteProduct() {
    await deleteProduct(productId)
    navigate('/products')
  }

  useEffect(()=>{
    getProduct()
  },[])


  return (
    <div>
      <h1>Product Details</h1>
      {product ? <>
        <h2>Title: {product.title}</h2>
        <p>Description: {product.description}</p>
        <p>Category: {product.category}</p>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>
        <button onClick={HandleDeleteProduct}>Delete Product</button>
        <Link to={`/products/${product._id}/edit`}>Edit Product</Link>
      </>: <p>Loading ...</p>}
    </div>
  )
}

export default ProductDetails
