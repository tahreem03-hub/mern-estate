import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import SignOut from './pages/SignOut'
import Profile from './pages/Profile'
import About from './pages/About'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/sign-in' element={<SignIn />} />
      <Route path='/sign-out' element={<SignOut />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/about' element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}
