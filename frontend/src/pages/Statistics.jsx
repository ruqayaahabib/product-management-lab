import axios from "axios"
import { useState, useEffect } from "react"
import { fetchStatistics } from "../Services/ProductServices"

function Statistics() {
    const [statistic, setStatistics] = useState([])
    async function getStatistic() {
        const response = await fetchStatistics()
        setStatistics(response)
    }

    useEffect(()=>{
        getStatistic()
    },[])
  return (
    <div>
        <h1>Statistics</h1>
        {statistic ? <>
            <p>Total Products: {statistic.totalProducts}</p>
            <p>Total Values: {statistic.totalValue}</p>
            <p>Low Stock Items: {statistic.lowStockItems}</p>
        </>:<p>Loading...</p>}
      
    </div>
  )
}

export default Statistics
