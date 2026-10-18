import { Link } from "react-router"
function Navbar() {
  return (
      <div>
      <Link to="/">Homepage | </Link>
      <Link to="/products">All Products |</Link>
      <Link to="/products/create"> Create Product | </Link>
      <Link to="/products/low-stock">Low Stock | </Link>
      <Link to="/products/statistics">Statistics</Link>

    </div>
  )
}

export default Navbar
