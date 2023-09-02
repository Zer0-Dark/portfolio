import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AboutMe from './components/AboutMe.jsx'
import Projects from './components/Projects.jsx'
import ContactMe from './components/ContactMe.jsx'
import Home from './components/Home.jsx'
import AboutHome from './components/AboutHome.jsx'
import AboutEducation from './components/AboutEducation.jsx'
import AboutCv from './components/AboutCv.jsx'
import AboutHobbies from './components/AboutHobbies.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  <Route path='/'element={<App></App>}>
    <Route index element={<Home/>}></Route>
    <Route path='about' element={<AboutMe></AboutMe>}>
      <Route index element={<AboutHome></AboutHome>}></Route>
      <Route path='education' element={<AboutEducation></AboutEducation>}></Route>
      <Route path='CV' element={<AboutCv></AboutCv>}></Route>
      <Route path='hobbies' element={<AboutHobbies/>}></Route>
    </Route>
    <Route path='projects' element={<Projects></Projects>}/>
    <Route path='Contact' element={<ContactMe></ContactMe>}/>

  </Route>
  </Routes>
  </BrowserRouter>

)
