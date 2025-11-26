import { HomePage } from './components/pages/HomePage'
import { UserPage } from './components/pages/UserPage'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/userPage" element={<UserPage />} />
      </Routes>
    </>
  )
}

export default App
