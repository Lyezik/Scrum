import React from 'react'
import styled from 'styled-components'
import { Header } from '../layout/Header'
import { Main } from '../layout/Main'
import { Footer } from '../layout/Footer'

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

const HomePage = () => {
    return (
        <Container>
            <Header />
            <Main />
            <Footer />
        </Container>
    )
}

export { HomePage }