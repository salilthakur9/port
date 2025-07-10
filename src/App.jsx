import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
