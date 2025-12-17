import { StartPage } from './components/pages/StartPage'
import { ProtectedRoutes } from './components/layout/ProtectedRoutes'
import { HomePage } from './components/pages/HomePage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (

    <Routes>
      <Route path="/" element={<StartPage />} />

      <Route path="/user" element={<ProtectedRoutes />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
