
import styled from 'styled-components'
import { Header } from './components/layout/Header'
import { Main } from './components/layout/Main'
import { Footer } from './components/layout/Footer'


function App() {

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    max-width: 1920px;
    min-width: 320px;
    padding: 0 40px;
    margin: 0 auto;
    background-color:#31324e;
    color: #babfc5;
  `

  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  )
}

export default App
