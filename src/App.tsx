import { Route, Routes } from 'react-router-dom'
import "animate.css"

import Navbar from './components/Navbar'

//public
import HomePage from './pages/publics/Home'
import FunctionPage from './pages/publics/Functions'
import PricesPage from './pages/publics/Prices'
import BlogPage from './pages/publics/Blog'
import ContactPage from './pages/publics/Contact'
import Demo from './pages/publics/Demo'

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
        <Route path='/demo' element={<Demo />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </ div>
  )
}

export default App
