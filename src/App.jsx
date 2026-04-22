import React from 'react'
import { Toaster } from "react-hot-toast";
import Particle from './components/Particle'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <div>
      <Toaster position="top-right" />
      <Particle />
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Work />
      <Contact />
      <Footer />
      <ScrollToTop />

    </div>
  )
}

export default App