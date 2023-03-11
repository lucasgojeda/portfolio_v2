/** Libraries */
import { useEffect } from 'react'
import { styled } from '@mui/material/styles'
import { About, Contact, Home, Projects } from './components/sections'

/** Components */
import { Footer, Navbar } from './components/ui'

/** Utils */
import { pingToEmailSender, pingToEcommerceBack } from './utils'

/** Material UI - Custom components */
const MainContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  background: '#gray',
}))

function App() {
  useEffect(() => {
    pingToEmailSender()
    pingToEcommerceBack()
  }, [])
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
