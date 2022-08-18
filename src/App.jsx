import { useState } from 'react'
import Help from './components/Help'
import NavBar from './components/NavBar'
import ServicePage from './components/ServicePage'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <NavBar/>
      <Help helpStyle={"p-10"}/>
      <ServicePage/>
      <Footer/>
    </>
  )
}

export default App
