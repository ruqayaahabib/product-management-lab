import axios from "axios"
import { useState, useEffect } from "react"
import { fetchLowStock } from "../Services/ProductServices"

function LowStock() {
    const [lowStock, setLowStock] = useState([])

    async function getLowStock() {
        const response = await fetchLowStock()
        setLowStock(response)
    }
    useEffect(() => {
        getLowStock()
    }, [])

  return (
    <div>
      <h1>Low Stock</h1>

    {lowStock.map((oneLowStock)=>
        <div key={oneLowStock._id}>
            <p>Title: {oneLowStock.title}</p>
            <p>Price: {oneLowStock.price}</p>
            <p>Quantity: {oneLowStock.quantity}</p>
            <p>--------------------------------</p>
        </div>
    )}
    </div>
  )
}

export default LowStock
