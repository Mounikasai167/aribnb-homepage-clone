export default function About() {
  return (
    <div className="p-10 bg-white min-h-screen">
      <h1 className="text-5xl font-bold text-red-500 mb-6">About Airbnb Clone</h1>
      <p className="text-xl text-gray-700 mb-4">
        Welcome to our Airbnb Clone project! This is a demonstration of building a modern, 
        responsive booking platform using React, Tailwind CSS, and Vite.
      </p>
      <p className="text-xl text-gray-700 mb-4">
        Our mission is to provide a user-friendly interface for discovering and booking amazing places to stay.
      </p>
      <h2 className="text-3xl font-bold text-red-500 mt-8 mb-4">Features</h2>
      <ul className="text-lg text-gray-700 space-y-2">
        <li>✓ Browse popular stays</li>
        <li>✓ View room details</li>
        <li>✓ Search and filter properties</li>
        <li>✓ Responsive design</li>
        <li>✓ Modern UI with Tailwind CSS</li>
      </ul>
    </div>
  )
}
