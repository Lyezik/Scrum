import { StartPage } from './components/pages/StartPage'
import { ProtectedRoutes } from './components/layout/ProtectedRoutes'
import { Routes, Route } from 'react-router-dom'
import { Board } from './components/blocks/Board'

function App() {

  return (

    <Routes>
      <Route path="/" element={<StartPage />} />

      <Route path="/user" element={<ProtectedRoutes />}>
        <Route path=":id" element={<Board />} />
      </Route>
    </Routes>
  )
}

export default App
