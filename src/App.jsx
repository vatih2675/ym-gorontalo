import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Beranda from "./pages/Beranda"
import Informasi from "./pages/Informasi"
import Bpjph from "./pages/Bpjph"
import Profil from "./pages/Profil"
import Formulir from "./pages/Formulir"
import Banner from "./components/Banner"
import Footer from "./components/Footer"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Hero />
      <Routes>
        <Route path="/" element={<Beranda />} />
        <Route path="/informasi" element={<Informasi />} />
        <Route path="/bpjph" element={<Bpjph />} />
        <Route path="/profil" element={<Profil />} />
        <Route path="/formulir" element={<Formulir />} />
      </Routes>
      <Banner />
      <Footer />
    </BrowserRouter>
  )
}

export default App
