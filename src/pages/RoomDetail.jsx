import { useParams } from 'react-router-dom'

export default function RoomDetail() {
  const { id } = useParams()

  const rooms = [
    {
      id: '1',
      title: "Luxury Room",
      price: 299,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      description: "Experience ultimate luxury in our premium suite. Features a king-size bed, private bathroom with jacuzzi, and stunning city views.",
      amenities: ["WiFi", "AC", "TV", "Mini Bar", "Jacuzzi", "City View"]
    },
    {
      id: '2',
      title: "Modern Apartment",
      price: 199,
      image: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      description: "A sleek modern apartment with contemporary design. Perfect for couples or solo travelers looking for comfort and style.",
      amenities: ["WiFi", "Kitchen", "Washer/Dryer", "Heating", "AC"]
    },
    {
      id: '3',
      title: "Beach House",
      price: 399,
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      description: "Wake up to ocean views in this beautiful beach house. Direct beach access, spacious terrace, and all modern amenities.",
      amenities: ["Beach Access", "WiFi", "Kitchen", "Terrace", "BBQ", "Ocean View"]
    }
  ]

  const room = rooms.find(r => r.id === id)

  if (!room) {
    return <div className="p-10 text-center text-2xl text-gray-700">Room not found</div>
  }

  return (
    <div className="p-10 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <img src={room.image} alt={room.title} className="w-full h-96 object-cover rounded-2xl mb-8" />
        
        <h1 className="text-5xl font-bold text-red-500 mb-4">{room.title}</h1>
        <p className="text-3xl font-bold text-gray-700 mb-6">${room.price} / night</p>
        
        <p className="text-lg text-gray-700 mb-8">{room.description}</p>
        
        <h2 className="text-3xl font-bold text-gray-700 mb-4">Amenities</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {room.amenities.map((amenity, idx) => (
            <div key={idx} className="bg-yellow-100 p-4 rounded-lg">
              <p className="font-bold text-gray-700">✓ {amenity}</p>
            </div>
          ))}
        </div>
        
        <button className="w-full bg-red-500 text-white px-8 py-4 rounded-xl hover:bg-red-700 text-xl font-bold">
          Book Now
        </button>
      </div>
    </div>
  )
}
