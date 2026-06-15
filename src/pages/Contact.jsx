export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <div className="p-10 bg-white min-h-screen">
      <h1 className="text-5xl font-bold text-red-500 mb-8">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-3xl font-bold text-gray-700 mb-4">Get in Touch</h2>
          <p className="text-lg text-gray-600 mb-6">
            Have questions or need assistance? We'd love to hear from you. Contact us using the form or reach out directly.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-bold text-gray-700">Email</h3>
              <p className="text-gray-600">hello@airbnbclone.com</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700">Phone</h3>
              <p className="text-gray-600">+1 (555) 123-4567</p>
            </div>
            <div>
              <h3 className="font-bold text-gray-700">Address</h3>
              <p className="text-gray-600">123 Main St, City, State 12345</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-lg font-bold text-gray-700 mb-2">Name</label>
            <input type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500" />
          </div>
          
          <div>
            <label className="block text-lg font-bold text-gray-700 mb-2">Email</label>
            <input type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500" />
          </div>
          
          <div>
            <label className="block text-lg font-bold text-gray-700 mb-2">Message</label>
            <textarea rows="5" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"></textarea>
          </div>
          
          <button type="submit" className="w-full bg-red-500 text-white px-8 py-3 rounded-lg hover:bg-red-700 text-lg font-bold">
            Send Message
          </button>
        </form>
      </div>
    </div>
  )
}
