import styled from 'styled-components'
import { Header } from '../layout/Header'
import { Footer } from '../layout/Footer'

const StyledContainer = styled.div`
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

const StartPage = () => {
    return (
        <StyledContainer>
            <Header />
            <main>    {/* добавить элемент StartMain */}
                Авторизируйтесь
            </main>
            <Footer />
        </StyledContainer>
    )
}

export { StartPage }