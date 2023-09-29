
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Projects from './components/Projects.jsx'
import ContactMe from './components/ContactMe.jsx'
import Home from './components/Home.jsx'
import WhoAmI from './components/WhoAmI.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App></App>}>
        <Route index element={<Home />}></Route>
        <Route path='about' element={<WhoAmI></WhoAmI>}></Route>
        <Route path='projects' element={<Projects></Projects>} />
        <Route path='Contact' element={<ContactMe></ContactMe>} />

      </Route>
    </Routes>
  </BrowserRouter>

)
