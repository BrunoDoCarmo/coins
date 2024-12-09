import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Home } from "./components/pages/Home"
import { Company } from "./components/pages/Company"
import { Contact } from "./components/pages/Contact"
import { NewProject } from "./components/pages/NewProject"
import { Navbar } from "./components/layout/Navbar"

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/company" element={<Company/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/newproject" element={<NewProject/>}/>
       </Routes>
      <p>Footer</p>
    </Router>
  )
}

export default App
