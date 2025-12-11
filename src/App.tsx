import { StartPage } from './components/pages/StartPage'
import { Layout } from './components/layout/Layout'
import { HomePage } from './components/pages/HomePage'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (

    <Routes>
      <Route path="/" element={<StartPage />} />

      <Route path="/user" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  )
}

export default App
