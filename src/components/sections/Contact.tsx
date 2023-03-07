/** Libraries */
import { styled } from '@mui/material/styles'

import PhotoCameraIcon from '@mui/icons-material/PhotoCamera'

import Avatar from '@mui/material/Avatar'
import Stack from '@mui/material/Stack'
import { Typography } from '@mui/material'

/** Material UI - Custom components */
const MainContainer = styled('div')(({ theme }) => ({
  width: '100%',
  height: '100vh',
  paddingTop: '4rem',
  background:
    'linear-gradient(to right,rgba(245,245,245,.8),rgba(245,245,245,.8)),url(https://res.cloudinary.com/the-kings-company/image/upload/v1678147756/Portfolio_v2/common-bg_i9afwm.svg)',
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

export const Contact = (): JSX.Element => {
  return (
    <MainContainer>
      <FontName id="contact">Contact</FontName>
      <FontDescription>
        Feel free to Contact me by submitting the form below and I will get back
        to you as soon as possible
      </FontDescription>
    </MainContainer>
  )
}
