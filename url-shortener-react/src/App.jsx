import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import LandingPage from './components/LandingPage.jsx'
import AboutPage from './components/AboutPage.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import RegisterPage from './components/RegisterPage.jsx'
import LoginPage from './components/LoginPage.jsx'
import { Toaster } from 'react-hot-toast'
import DashboardLayout from './components/Dashboard/DashboardLayout.jsx'
import ErrorPage from './components/ErrorPage.jsx'

function App() {
  return (
    <Router>
    <Navbar />
    <Toaster position='bottom-center'/>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/dashboard' element={<DashboardLayout />} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
    <Footer />
    </Router>
  )
}
export default App
