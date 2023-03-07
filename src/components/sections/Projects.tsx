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
  // justifyContent: 'flex-start',
  // alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    // minHeight: '80vh',
    // overflow: 'contained',
  },
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
  [theme.breakpoints.down('sm')]: {
    // maxWidth: '80%',
    // fontSize: '2.5rem',
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
  [theme.breakpoints.down('sm')]: {
    // marginTop: '2.5vh',
  },
}))

const ProjectsContainer = styled('div')(({ theme }) => ({
  width: '100%',
  minHeight: '50vh',
  paddingTop: '4rem',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    // minHeight: '80vh',
    // overflow: 'contained',
  },
}))

export const Projects = (): JSX.Element => {
  return (
    <MainContainer>
      <FontName id="projects">PROJECTS</FontName>
      <FontDescription>
        Here you will find some of the personal and clients projects that I
        created with each project containing its own case study
      </FontDescription>
      <ProjectsContainer>
        <CardProject
          title="Dopefolio"
          description="Dopefolio is a successful Open-Source project that I created which have been featured on some of the biggest tech sites like CSS-Tricks, Hostinger, etc & used by thousands of developers globally"
          img="https://res.cloudinary.com/the-kings-company/image/upload/v1678147624/Portfolio_v2/project-mockup-example_joddyq.jpg"
        />
        <CardProject
          title="Wilsonport"
          description="Wilsonport is a multiservice logistics and transport company and I created their website from scratch using the frontend tools I know."
          img="https://res.cloudinary.com/the-kings-company/image/upload/v1678147624/Portfolio_v2/project-mockup-example_joddyq.jpg"
        />
        <CardProject
          title="Boreal Coffee Clone"
          description="I re-created the frontend of Boreal Coffee's official web app because I got attracted to their beautiful UI. It was a great experience for me to build the entire frontend."
          img="https://res.cloudinary.com/the-kings-company/image/upload/v1678147624/Portfolio_v2/project-mockup-example_joddyq.jpg"
        />
        <CardProject
          title="Crown Template"
          description="Crown is a web template that I created targeting the restaurant and food industry which anyone can use to present their business online."
          img="https://res.cloudinary.com/the-kings-company/image/upload/v1678147624/Portfolio_v2/project-mockup-example_joddyq.jpg"
        />
      </ProjectsContainer>
    </MainContainer>
  )
}
