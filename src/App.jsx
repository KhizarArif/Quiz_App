import styled from "styled-components"
import Navbar from "./components/Navbar"
import { useState } from "react"
import QuizScreen from "./components/QuizScreen"
import StartingScreen from "./components/StartingScreen"

function App() {

  const [isQuizStarted, setIsQuizStarted] = useState(false)

  return (
    <>
      <Navbar />
      <AppContainer>
        {
          isQuizStarted ?
            <QuizScreen retry={() => setIsQuizStarted(false)}  /> :
            <StartingScreen start={() => setIsQuizStarted(true)}  />
        }
      </AppContainer>
    </>
  )
}

export default App


const AppContainer = styled.div`

`