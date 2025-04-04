import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Typography, Container, Grid, Paper, IconButton, Tooltip } from '@mui/material';
import { GitHub, LinkedIn, Twitter, Email, Code, Work, School, EmojiEvents, Speed, Star, Group, CheckCircle, Computer } from '@mui/icons-material';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  const socialLinks = [
    { icon: <GitHub />, url: 'https://github.com/Ashish5180', label: 'GitHub' },
    { icon: <LinkedIn />, url: 'https://www.linkedin.com/in/ashishyadav001/', label: 'LinkedIn' },
    // { icon: <Twitter />, url: 'https://twitter.com/yourusername', label: 'Twitter' },
    // { icon: <Email />, url: 'theashish.y@gmail.com', label: 'Email' },
  ];

  const stats = [
    { icon: <Speed />, value: '8 Months(Freelancing)', label: ' Experience', color: '#61DAFB' },
    { icon: <Star />, value: '10+', label: 'Projects Completed', color: '#FF9900' },
    // { icon: <Group />, value: '20+', label: 'Happy Clients', color: '#68A063' },
    { icon: <CheckCircle />, value: '100%', label: 'Client Satisfaction', color: '#FF4081' },
  ];

  const timelineData = [
    {
      year: 'November 2023',
      title: 'Started Programming',
      description: 'Began my journey in web development with HTML, CSS, and JavaScript',
      icon: <Code />,
      color: '#61DAFB'
    },
    {
      year: 'March 2024',
      title: 'Advanced Skills',
      description: 'Mastered React, Node.js, cloud technologies , database management , version control, and testing',
      icon: <School />,
      color: '#FF9900'
    },
    {
      year: 'July 2024',
      title: 'First Professional Role',
      description: 'Joined as a  Developer at Health Bridge International',
      icon: <Work />,
      color: '#68A063'
    },
    
    {
      year: 'November 2024',
      title: 'Backend Developer',
      description: 'Worked on a team of developers to build a scalable backend for an Inventory Management platform',
      icon: <EmojiEvents />,
      color: '#FF4081'
    }
  ];

  return (
    <Box
      id="about"
      ref={ref}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        bgcolor: '#000000',
        padding: 0,
        margin: 0,
        position: 'relative',
        overflow: 'hidden',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        marginTop: '-64px',
        paddingTop: '64px',
        boxSizing: 'border-box',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0) 70%)',
          zIndex: 1,
        },
      }}
    >
      <Container 
        maxWidth={false} 
        sx={{ 
          position: 'relative', 
          zIndex: 2, 
          px: { xs: 2, sm: 4, md: 6 }, 
          py: 0,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start'
        }}
      >
        {/* Header Section */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{
            textAlign: 'center',
            mb: 8,
            position: 'relative',
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 'bold',
              color: '#ffffff',
              textShadow: '0 0 20px rgba(255,255,255,0.4)',
              mb: 2,
            }}
          >
            About Me
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#cccccc',
              maxWidth: '600px',
              mx: 'auto',
            }}
          >
            A passionate Full Stack Developer crafting digital experiences with modern technologies
          </Typography>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* Left Column - Profile & Stats */}
          <Grid item xs={12} md={5}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              sx={{
                position: 'relative',
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
            >
              {/* Profile Card */}
              <Paper
                sx={{
                  p: 4,
                  mb: 4,
                  bgcolor: 'rgba(26,26,26,0.8)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  transform: 'translateZ(0)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateZ(20px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    boxShadow: '0 0 30px rgba(255,255,255,0.1)',
                  },
                }}
              >
                <Box
                  sx={{
                    width: 150,
                    height: 150,
                    mx: 'auto',
                    mb: 3,
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -5,
                      left: -5,
                      right: -5,
                      bottom: -5,
                      background: 'linear-gradient(45deg, #61DAFB, #FF9900)',
                      borderRadius: '50%',
                      animation: 'rotate 10s linear infinite',
                      '@keyframes rotate': {
                        '0%': { transform: 'rotate(0deg)' },
                        '100%': { transform: 'rotate(360deg)' },
                      },
                    },
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      height: '100%',
                      borderRadius: '50%',
                      bgcolor: '#000000',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      zIndex: 1,
                    }}
                  >
                    <Computer sx={{ fontSize: 40, color: '#61DAFB' }} />
                  </Box>
                </Box>

                <Typography variant="h4" sx={{ color: '#ffffff', mb: 1, textAlign: 'center', fontWeight: 'bold' }}>
                  Ashish Yadav
                </Typography>
                <Typography variant="h6" sx={{ color: '#cccccc', mb: 3, textAlign: 'center' }}>
                  Full Stack Developer
                </Typography>

                {/* Social Links */}
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
                  {socialLinks.map((link, index) => (
                    <Tooltip key={index} title={link.label}>
                      <IconButton
                        component="a"
                        href={link.url}
                        target="_blank"
                        sx={{
                          color: '#ffffff',
                          bgcolor: 'rgba(255,255,255,0.1)',
                          '&:hover': {
                            color: '#ffffff',
                            bgcolor: 'rgba(255,255,255,0.2)',
                            transform: 'translateY(-3px)',
                            transition: 'all 0.3s ease',
                          },
                        }}
                      >
                        {link.icon}
                      </IconButton>
                    </Tooltip>
                  ))}
                </Box>
              </Paper>

              {/* Stats Grid */}
              <Grid container spacing={2}>
                {stats.map((stat, index) => (
                  <Grid item xs={6} key={index}>
                    <Paper
                      component={motion.div}
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        bgcolor: 'rgba(26,26,26,0.8)',
                        backdropFilter: 'blur(10px)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          transform: 'translateY(-5px)',
                          border: `1px solid ${stat.color}`,
                          boxShadow: `0 0 20px ${stat.color}40`,
                        },
                      }}
                    >
                      <Box sx={{ color: stat.color, mb: 1 }}>
                        {stat.icon}
                      </Box>
                      <Typography variant="h5" sx={{ color: '#ffffff', mb: 1, fontWeight: 'bold' }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#cccccc' }}>
                        {stat.label}
                      </Typography>
                    </Paper>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Right Column - Timeline */}
          <Grid item xs={12} md={7}>
            <Box
              component={motion.div}
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              sx={{
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  left: 20,
                  top: 0,
                  bottom: 0,
                  width: 2,
                  background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent)',
                }
              }}
            >
              {timelineData.map((item, index) => (
                <Box
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, x: 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
                  sx={{
                    position: 'relative',
                    pl: 8,
                    mb: 4,
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      left: 12,
                      top: 0,
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: item.color,
                      boxShadow: `0 0 20px ${item.color}`,
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      left: 20,
                      top: 20,
                      width: 2,
                      height: '100%',
                      background: 'rgba(255,255,255,0.1)',
                    },
                    '&:last-child::after': {
                      display: 'none',
                    }
                  }}
                >
                  <Paper
                    sx={{
                      p: 3,
                      bgcolor: 'rgba(26,26,26,0.8)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      transform: 'translateX(0)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(10px)',
                        border: `1px solid ${item.color}`,
                        boxShadow: `0 0 20px ${item.color}40`,
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Box sx={{ color: item.color }}>
                        {item.icon}
                      </Box>
                      <Typography variant="h6" sx={{ color: '#ffffff', fontWeight: 'bold' }}>
                        {item.year}
                      </Typography>
                    </Box>
                    <Typography variant="h5" sx={{ color: '#ffffff', mb: 1, fontWeight: 'bold' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: '#cccccc' }}>
                      {item.description}
                    </Typography>
                  </Paper>
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 