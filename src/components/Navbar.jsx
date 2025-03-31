import { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemText, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setMobileOpen(false);
    }
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Education', id: 'education' },
  ];

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '3px',
          background: '#ffffff',
          transformOrigin: '0%',
          zIndex: 1000,
        }}
      />
      <AppBar
        position="fixed"
        sx={{
          height: '80px',
          background: scrolled ? 'rgba(0, 0, 0, 0.95)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          boxShadow: scrolled ? '0 4px 30px rgba(0, 0, 0, 0.3)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.1)' : 'none',
          transition: 'all 0.3s ease',
          width: '100%',
          left: 0,
          right: 0,
          margin: 0,
          padding: 0,
        }}
      >
        <Container 
          maxWidth={false} 
          sx={{ 
            height: '100%', 
            px: { xs: 0, sm: 0, md: 0 },
            margin: 0,
            width: '100%',
          }}
        >
          <Toolbar 
            sx={{ 
              height: '100%', 
              justifyContent: 'space-between',
              px: { xs: 2, sm: 4, md: 6 },
            }}
          >
            <Typography
              variant="h6"
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              sx={{
                flexGrow: 1,
                color: '#ffffff',
                fontWeight: 'bold',
                cursor: 'pointer',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -5,
                  left: 0,
                  width: '0%',
                  height: '2px',
                  background: '#ffffff',
                  transition: 'width 0.3s ease',
                },
                '&:hover::after': {
                  width: '100%',
                },
              }}
              onClick={() => scrollToSection('about')}
            >
              Portfolio
            </Typography>

            <Box 
              sx={{ 
                display: { xs: 'none', md: 'flex' }, 
                gap: 2,
                '& > button': {
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.1)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.3s ease',
                  },
                  '&:hover::before': {
                    transform: 'translateX(0)',
                  },
                }
              }}
            >
              {navItems.map((item, index) => (
                <Button
                  key={item.id}
                  component={motion.button}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.id)}
                  sx={{
                    color: '#ffffff',
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -5,
                      left: '50%',
                      width: '0%',
                      height: '2px',
                      background: '#ffffff',
                      transition: 'all 0.3s ease',
                      transform: 'translateX(-50%)',
                    },
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>

            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              component={motion.div}
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
              sx={{ 
                display: { md: 'none' }, 
                color: '#ffffff',
                '&:hover': {
                  color: '#cccccc',
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: '100%',
            maxWidth: '300px',
            background: 'rgba(0, 0, 0, 0.95)',
            backdropFilter: 'blur(10px)',
            borderLeft: '1px solid rgba(255, 255, 255, 0.1)',
          },
        }}
      >
        <List>
          {navItems.map((item, index) => (
            <ListItem
              button
              key={item.id}
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => scrollToSection(item.id)}
              sx={{
                '&:hover': {
                  background: 'rgba(255, 255, 255, 0.1)',
                  transform: 'translateX(5px)',
                  transition: 'all 0.3s ease',
                },
              }}
            >
              <ListItemText
                primary={item.name}
                sx={{
                  color: '#ffffff',
                  textAlign: 'center',
                  '&:hover': {
                    color: '#cccccc',
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar; 