import React from 'react'

function Main() {

  const rooms = [
    {
      id:1,
      title:"Luxury Room",
      image:"https://images.unsplash.com/photo-1505693416388-ac5ce068fe85"
    },

    {
      id:2,
      title:"Modern Apartment",
      image:"https://images.unsplash.com/photo-1494526585095-c41746248156"
    },

    {
      id:3,
      title:"Beach House",
      image:"https://images.unsplash.com/photo-1512917774080-9991f1c4c750"
    }
  ]

  return (
    <div className="p-10 bg-white">

      <h2 className="text-4xl font-bold text-center text-red-500 mb-10">
        Popular Stays
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        {rooms.map((room) => (
          <div key={room.id} className="bg-yellow-100 rounded-2xl shadow-lg overflow-hidden">

            <img
              src={room.image}
              alt={room.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-5">
              <h3 className="text-2xl font-bold text-red-500">
                {room.title}
              </h3>

              <button className="mt-4 bg-red-500 text-white px-5 py-2 rounded-lg hover:bg-red-700">
                Book Now
              </button>
            </div>

          </div>
        ))}

      </div>

    </div>
  )
}

export default Main
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
