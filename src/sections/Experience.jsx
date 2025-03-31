import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Typography, Container, Grid, Paper, Chip, IconButton, Tooltip } from '@mui/material';
import { Work, ArrowForward, GitHub, Launch } from '@mui/icons-material';

const experiences = [
  {
    title: 'Backend  Developer',
    company: 'Elastomech Rubber Indusrty',
    period: 'November 2024 - March 2025',
    description: 'Leading a team of developers in building scalable Inventory Management applications using React,Redux , Node.js, and MongoDB.',
    technologies: ['React','Redux', 'Node.js',  'MongoDB'],
    achievements: [
      `Designed and built a web-based system to track
real-time raw material inventory, reducing manual
errors by 30%.`,
        `Implemented worker logging features, improving
accountability and tracking efficiency by 40%.`,
        `Developed dynamic order prioritization, enhancing
workflow automation.`
    ],
    link: 'https://www.elastomech.in/'
  },
  {
    title: 'Full Stack Developer',
    company: 'Health Bridge International',
    period: 'July 2024 - October 2024',
    description: 'Developed and maintained a full-stack Health applications using modern technologies and best practices.',
    technologies: ['React', 'Express', 'Node.js', 'MongoDB', 'Vercel'],
    achievements: [
      `Engineered a secure backend for health record
management, ensuring compliance with data
protection standards`,
    `Integrated real-time chat functionality, boosting
client engagement and communication efficiency.`
    ],
    // link: 'https://digitalinnovations.com'
  },
  
];

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <Box
      id="experience"
      ref={ref}
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        bgcolor: '#000000',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
        width: '100vw',
        marginLeft: 'calc(-50vw + 50%)',
        marginRight: 'calc(-50vw + 50%)',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0) 50%)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth={false} sx={{ position: 'relative', zIndex: 2, px: { xs: 2, sm: 4, md: 6 } }}>
        <Typography
          variant="h2"
          component={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{
            mb: 6,
            fontWeight: 'bold',
            color: '#ffffff',
            textAlign: 'center',
            textShadow: '0 0 10px rgba(255,255,255,0.3)',
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -10,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 100,
              height: 3,
              background: 'linear-gradient(90deg, transparent, #ffffff, transparent)',
            }
          }}
        >
          Work Experience
        </Typography>

        <Grid container spacing={4}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} key={index}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                sx={{
                  p: 4,
                  bgcolor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: 4,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)',
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.6s ease',
                  },
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                    '&::before': {
                      transform: 'translateX(100%)',
                    },
                  },
                }}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                  <Box>
                    <Typography variant="h5" sx={{ color: '#ffffff', fontWeight: 'bold', mb: 1 }}>
                      {exp.title}
                    </Typography>
                    <Typography variant="h6" sx={{ color: '#cccccc', mb: 1 }}>
                      {exp.company}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#999999' }}>
                      {exp.period}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', gap: 1 }}>
                    <Tooltip title="View Company Website">
                      <IconButton
                        component="a"
                        href={exp.link}
                        target="_blank"
                        sx={{
                          color: '#ffffff',
                          '&:hover': {
                            color: '#cccccc',
                            transform: 'scale(1.1)',
                            transition: 'all 0.3s ease',
                          },
                        }}
                      >
                        <Launch />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </Box>

                <Typography variant="body1" sx={{ color: '#cccccc', mb: 3 }}>
                  {exp.description}
                </Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {exp.technologies.map((tech, i) => (
                    <Chip
                      key={i}
                      label={tech}
                      sx={{
                        bgcolor: 'rgba(255,255,255,0.1)',
                        color: '#ffffff',
                        '&:hover': {
                          bgcolor: 'rgba(255,255,255,0.2)',
                          transform: 'translateY(-2px)',
                          transition: 'all 0.3s ease',
                        },
                      }}
                    />
                  ))}
                </Box>

                <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle1" sx={{ color: '#ffffff', mb: 2, fontWeight: 'bold' }}>
                    Key Achievements
                  </Typography>
                  {exp.achievements.map((achievement, i) => (
                    <Box
                      key={i}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        mb: 1,
                        color: '#cccccc',
                      }}
                    >
                      <ArrowForward sx={{ mr: 1, color: '#ffffff' }} />
                      <Typography variant="body2">{achievement}</Typography>
                    </Box>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Experience; 