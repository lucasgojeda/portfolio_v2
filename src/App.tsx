/** Libraries */
import { styled } from '@mui/material/styles'
import { About, Contact, Home, Projects } from './components/sections'

/** Components */
import { Footer, Navbar } from './components/ui'

/** Material UI - Custom components */
const MainContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  background: '#gray',
}))

function App() {
  return (
    <MainContainer>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </MainContainer>
  )
}

export default App
