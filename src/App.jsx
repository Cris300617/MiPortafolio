import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Portafolio from './portafilio';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>

      <Container>
        <Portafolio/>
        
      </Container>
    </BrowserRouter>
  )
}

const Container = styled.main `


`


export default App
