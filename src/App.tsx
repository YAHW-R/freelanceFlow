import { Route, Routes } from 'react-router-dom'
import "animate.css"

import Navbar from './components/Navbar'

import HomePage from './pages/Home'
import FunctionPage from './pages/Functions'
import PricesPage from './pages/Prices'
import BlogPage from './pages/Blog'
import ContactPage from './pages/Contact'

//auth
import RegisterPage from './pages/auth/Register'
import LoginPage from './pages/auth/Login'

// Add VANTA to window type
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    VANTA: any;
  }
}

function App() {
  return (
    <div className="font-sans antialiased text-gray-800">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/functions' element={<FunctionPage />} />
        <Route path='/prices' element={<PricesPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </ div>
  )
}

export default App
