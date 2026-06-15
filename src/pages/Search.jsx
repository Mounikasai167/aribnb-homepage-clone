import { useState } from 'react'

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const [priceRange, setPriceRange] = useState(100)

  const rooms = [
    { id: 1, title: "Luxury Room", price: 299, image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85" },
    { id: 2, title: "Modern Apartment", price: 199, image: "https://images.unsplash.com/photo-1494526585095-c41746248156" },
    { id: 3, title: "Beach House", price: 399, image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750" }
  ]

  const filtered = rooms.filter(room => 
    room.title.toLowerCase().includes(searchTerm.toLowerCase()) && room.price <= priceRange
  )

  return (
    <div className="p-10 bg-white min-h-screen">
      <h1 className="text-5xl font-bold text-red-500 mb-8">Search Properties</h1>
      
      <div className="mb-8 bg-gray-100 p-6 rounded-lg">
        <div className="mb-4">
          <label className="block text-lg font-bold text-gray-700 mb-2">Search</label>
          <input
            type="text"
            placeholder="Search by property name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
          />
        </div>
        
        <div>
          <label className="block text-lg font-bold text-gray-700 mb-2">Max Price: ${priceRange}</label>
          <input
            type="range"
            min="50"
            max="500"
            value={priceRange}
            onChange={(e) => setPriceRange(parseInt(e.target.value))}
            className="w-full"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {filtered.length > 0 ? (
          filtered.map(room => (
            <div key={room.id} className="bg-yellow-100 rounded-2xl shadow-lg overflow-hidden">
              <img src={room.image} alt={room.title} className="w-full h-60 object-cover" />
              <div className="p-5">
                <h3 className="text-2xl font-bold text-red-500">{room.title}</h3>
                <p className="text-lg font-bold text-gray-700 mt-2">${room.price}/night</p>
                <button className="mt-4 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-700 w-full">
                  Book Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-xl text-gray-700">No properties found matching your criteria.</p>
        )}
      </div>
    </div>
  )
}
