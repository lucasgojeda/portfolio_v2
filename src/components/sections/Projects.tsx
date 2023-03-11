/** Libraries */
import { styled } from '@mui/material/styles'

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'

import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'
import { CardProject } from './CardProject'

/** Material UI - Custom components */
const MainContainer = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  background: '#fafafa',
  paddingTop: '5rem',
  display: 'flex',
  flexDirection: 'column',
}))

const FontName = styled(Typography)(({ theme }) => ({
  display: 'block',
  textDecoration: 'none',
  fontSize: '2.25rem',
  fontFamily: 'Source Sans Pro, sans-serif',
  textTransform: 'uppercase',
  fontWeight: 700,
  letterSpacing: '3px',
  textAlign: 'center',
  marginBottom: '2rem',
  position: 'relative',
  color: '#111',
  ':after': {
    content: '""',
    position: 'absolute',
    top: 'calc(100% + 1rem)',
    height: '5px',
    width: '1.75rem',
    background: theme.palette.primary.main,
    left: '50%',
    transform: 'translateX(-50%)',
    borderRadius: '5px',
  },
}))

const FontDescription = styled(Typography)(({ theme }) => ({
  display: 'block',
  textAlign: 'center',
  color: '#555',
  fontSize: '1rem',
  fontWeight: 500,
  maxWidth: '40rem',
  margin: 'auto',
  lineHeight: '1.6',
}))

const ProjectsContainer = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '50vh',
  paddingTop: '4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
}))

export const Projects = (): JSX.Element => {
  return (
    <MainContainer>
      <FontName id="projects">PROJECTS</FontName>
      <FontDescription>
        Here you will find some of the personal projects I created with their
        demo app and their github repository
      </FontDescription>
      <ProjectsContainer>
        <CardProject
          title="Ecommerce"
          description="This is a classic ecommerce or virtual store where a company can sell its products. This project is related to the Dashboard project."
          img="https://res.cloudinary.com/the-kings-company/image/upload/v1678562173/Portfolio_v2/projects/ecommerce_w5ehm7.png"
          demoLink="https://my-ecommerce-app-vite.netlify.app/"
          githubLink="https://github.com/lucasgojeda/eccomerce-app-frontend-vite"
        />
        <CardProject
          title="Dashboard"
          description="This is a dashboard for an ecommerce or a virtual store. This project is related to the Ecommerce project."
          img="https://res.cloudinary.com/the-kings-company/image/upload/v1678562172/Portfolio_v2/projects/dashboard_eyf3s8.png"
          demoLink="https://my-eccomerce-dashboard.netlify.app/"
          githubLink="https://github.com/lucasgojeda/eccomerce-app-dashboard"
        />
        <CardProject
          title="Virtual wallet"
          description="This is a virtual wallet project that I created with a team of people through a training on agile methodology and react js."
          img="https://res.cloudinary.com/the-kings-company/image/upload/v1678562172/Portfolio_v2/projects/alkybank_gnq0qn.png"
          demoLink="https://alkybank-wallet.netlify.app/"
          githubLink="https://github.com/lucasgojeda/alkybank"
        />
      </ProjectsContainer>
    </MainContainer>
  )
}
