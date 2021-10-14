import React from 'react'
import styled from 'styled-components'
import { Color, FlexColumn } from './components/Shared'
import SubmitRobotForm from './components/SubmitRobotForm/SubmitRobotForm'

const App: React.FC = () => {
  return (
   <Container>
     <SubmitRobotForm />
   </Container> 
  )
}

const Container = styled(FlexColumn)`
  height: 100%;
  width: 100%;
  position: absolute;
  color: ${Color.white};
  font: inter,sans-serif;
`;

export default App

