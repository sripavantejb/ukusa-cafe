
import './App.css'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Menu from './components/Menu'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Menu />} />
    </Routes> 
  )
}

export default App
