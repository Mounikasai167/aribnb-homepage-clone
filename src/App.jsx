import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "./Navbar"
import Footer from "./Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Search from "./pages/Search"
import Contact from "./pages/Contact"
import RoomDetail from "./pages/RoomDetail"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/room/:id" element={<RoomDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App