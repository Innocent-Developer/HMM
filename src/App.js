import React from 'react'
import Navbar from './Compontents/Navbar'
import {Footer} from './Compontents/Footer'
import { Homepage } from './Pages/Homepage'
import { About } from './Pages/About'
import { Roomcontent } from './Pages/Room-content'

export const App = () => {
  return (
    <div>
      <Navbar />
      <Homepage />
      <About />
      <Roomcontent />
      <Footer />
    </div>
  )
}
