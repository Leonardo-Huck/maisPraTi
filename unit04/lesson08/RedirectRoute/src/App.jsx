import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ProtectedRoute from './components/ProtectRoutes'
import Home from './components/Home'
import Login from './components/Login'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route
            path='/home'
            element={
              <ProtectedRoute isLoggedIn={true}>
                <Home />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
