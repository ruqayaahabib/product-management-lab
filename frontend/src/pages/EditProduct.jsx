import { useState, useEffect } from "react"
import axios from 'axios'
import { useNavigate, useParams } from "react-router"
import {fetchOneProduct} from "../Services/ProductServices"
import{updateProduct} from "../Services/ProductServices"
function EditProduct() {
  const [formData, setFormData] = useState({
    title: "", description: "", category: "", price: "", quantity: ""
  })

  const {productId} = useParams()

  const navigate = useNavigate()

  function handleChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }


  async function handleSubmit(event) {
    event.preventDefault()

    const response = await updateProduct(productId,formData) 


    navigate('/products/' + productId)


  }


  async function getProduct() {
    const response = await fetchOneProduct(productId)
    setFormData(response)
  }

  useEffect(()=>{
    getProduct()
  },[])

  return (
    <div>
      <h1>Create Product</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title"
          onChange={handleChange} value={formData.title}
        />

        <label htmlFor="description">Description:</label>
        <input type="text" name="description" id="description"
          onChange={handleChange} value={formData.description}
        />
        <label htmlFor="category">Category:</label>
        <input type="text" name="category" id="category"
          onChange={handleChange} value={formData.category}
        />
        <label htmlFor="price">Price:</label>
        <input type="text" name="price" id="price"
          onChange={handleChange} value={formData.price}
        />
        <label htmlFor="quantity">Quantity:</label>
        <input type="text" name="quantity" id="quantity"
          onChange={handleChange} value={formData.quantity}
        />

        <button>Update Product</button>

      </form>
    </div>
  )
}

export default EditProduct
