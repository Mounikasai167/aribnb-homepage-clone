import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-red-500 text-white flex justify-between items-center px-8 py-4">
      
      <Link to="/" className="text-3xl font-bold hover:text-yellow-300">
        Airbnb Homepage Clone
      </Link>

      <ul className="flex gap-6 text-lg">
        <li><Link to="/" className="hover:text-yellow-300">Home</Link></li>
        <li><Link to="/about" className="hover:text-yellow-300">About</Link></li>
        <li><Link to="/search" className="hover:text-yellow-300">Search</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-300">Contact</Link></li>
      </ul>

    </nav>
  )
}

export default Navbar