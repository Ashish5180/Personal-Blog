import { useState } from 'react'
import { Box, AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, useTheme, useMediaQuery } from '@mui/material'
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material'
import { motion } from 'framer-motion'
import About from './sections/About'
import Skills from './sections/Skills'
import Experience from './sections/Experience'
import Projects from './sections/Projects'
import Education from './sections/Education'
import './App.css'

function App() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    if (isMobile) {
      setMobileOpen(false)
    }
  }

  const sections = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
  ]

  const drawer = (
    <Box sx={{ width: 250, bgcolor: '#121212', height: '100vh', color: '#ffffff' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
        <IconButton onClick={handleDrawerToggle} sx={{ color: '#ffffff' }}>
          <CloseIcon />
        </IconButton>
      </Box>
      <List>
        {sections.map((section) => (
          <ListItem button key={section.id} onClick={() => scrollToSection(section.id)} sx={{ '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.1)' } }}>
            <ListItemText primary={section.label} sx={{ textAlign: 'center', fontSize: '18px', fontWeight: 'bold' }} />
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', bgcolor: '#000000', minHeight: '100vh' }}>
      <AppBar position="fixed" sx={{ bgcolor: '#000000', py: 1 }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h5"
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            sx={{ fontWeight: 'bold', color: '#ffffff', fontSize: '24px' }}
          >
            Personal Portfolio
          </Typography>
          {isMobile ? (
            <IconButton color="inherit" aria-label="open drawer" edge="end" onClick={handleDrawerToggle}>
              <MenuIcon sx={{ fontSize: 32 }} />
            </IconButton>
          ) : (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {sections.map((section) => (
                <Button
                  key={section.id}
                  color="inherit"
                  onClick={() => scrollToSection(section.id)}
                  sx={{
                    fontSize: '18px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s',
                    '&:hover': {
                      bgcolor: 'rgba(255, 255, 255, 0.1)',
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  {section.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer variant="temporary" anchor="right" open={mobileOpen} onClose={handleDrawerToggle} ModalProps={{ keepMounted: true }}>
        {drawer}
      </Drawer>

      <Box component="main" sx={{ pt: 10 }}>
        <Box id="about">
          <About />
        </Box>
        <Box id="skills">
          <Skills />
        </Box>
        <Box id="experience">
          <Experience />
        </Box>
        <Box id="projects">
          <Projects />
        </Box>
        <Box id="education">
          <Education />
        </Box>
      </Box>
    </Box>
  )
}

export default App
