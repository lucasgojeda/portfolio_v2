/** Libraries */
import { styled } from '@mui/material/styles'

import { Button, Typography } from '@mui/material'

/** Material UI - Custom components */
const MainContainer = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  background:
    'linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(https://res.cloudinary.com/the-kings-company/image/upload/v1678147756/Portfolio_v2/common-bg_i9afwm.svg)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('sm')]: {
    minHeight: '80vh',
    overflow: 'contained',
  },
}))

const HomeContainer = styled('div')(({ theme }) => ({
  marginTop: '12vh',
  width: '70%',
  height: '50vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  [theme.breakpoints.down('sm')]: {
    marginTop: '10vh',
    width: '90%',
  },
}))

const FontName = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  textDecoration: 'none',
  textAlign: 'start',
  fontSize: '70px',
  color: '#000',
  fontFamily: 'Source Sans Pro, sans-serif',
  textTransform: 'uppercase',
  letterSpacing: '1px',
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {
    maxWidth: '80%',
    fontSize: '2.5rem',
  },
}))

const FontDescription = styled(Typography)(({ theme }) => ({
  display: 'inline-block',
  textAlign: 'center',
  textDecoration: 'none',
  fontSize: '1.25rem',
  color: '#000',
  fontFamily: 'inherit',
  letterSpacing: '1px',
  [theme.breakpoints.down('sm')]: {
    marginTop: '2.5vh',
  },
}))

const ButtonProjects = styled(Button)(({ theme }) => ({
  width: '25vw',
  height: '9vh',
  marginTop: '5vh',
  fontSize: '1.15rem',
  fontWeight: 700,
  color: '#fff',
  ':hover': {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
  },
  [theme.breakpoints.down('sm')]: {
    width: '60vw',
    height: '7.5vh',
    borderRadius: '5px',
  },
}))

export const Home = (): JSX.Element => {
  const handleProjectsButton = () => {
    const elemento = document.getElementById('projects')
    elemento?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <MainContainer id="home">
      <HomeContainer>
        <FontName>HEY, I'M LUCAS OJEDA</FontName>
        <FontDescription>
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product
        </FontDescription>
        <ButtonProjects variant="contained" onClick={handleProjectsButton}>
          PROJECTS
        </ButtonProjects>
      </HomeContainer>
    </MainContainer>
  )
}
