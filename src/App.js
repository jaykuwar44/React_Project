import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './Files/About'
import Contact from './Files/Contact'
import Course from './Files/Course'
import Home from './Files/Home'
import Navbar from './Files/Navbar'
import NoMatch from './Files/NoMatch'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/course' element={<Course />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Routes>

    </div>
  )
}

export default App