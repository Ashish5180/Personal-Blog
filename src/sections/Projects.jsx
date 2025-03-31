import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Typography, Container, Grid, Paper, IconButton, Tooltip, Chip } from '@mui/material';
import { GitHub, Launch, Code } from '@mui/icons-material';

const projects = [
  {
    title: "Serverless Forms",
    description: "A serverless forms platform with real-time data and user authentication",
    image: "/images/img3.png",
    technologies: ["React", "Node.js", "MongoDB"],
    // liveDemo: "https://task-manager.demo.com",
    github: "https://github.com/Ashish5180/Saas-Form",
    highlights: ["Real-time data", "User authentication", "Mobile responsive", "Admin dashboard" , "Form API"]
  },
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform with real-time inventory, Order management and admin dashboard",
    image: "/images/img1.png",
    technologies: ["React", "Node.js", "MongoDB",],
    // liveDemo: "https://ecommerce-demo.com",
    github: "https://github.com/Ashish5180/Adrenix-Frontend01",
    highlights: ["Real-time inventory tracking",  "Admin dashboard", "Mobile responsive"]
  },
  {
    title: "Fitness Website",
    description: "A fitness website with responsive design , BMI Calculator , Nutrients Calculator , user-friendly interface",
    image: "/images/img2.png",
    technologies: ["React", "Redux", "Firebase"],
    // liveDemo: "https://vocal-horse-bd4d1d.netlify.app/",
    github: "https://github.com/Ashish5180/React-Fitness-Website",
    highlights: ["BMI Calculator", "Nutrients Calculator", "Login Authentication"]
  },
  
];

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <Box
      id="projects"
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
          Featured Projects
        </Typography>

        <Grid container spacing={6}>
          {projects.map((project, index) => (
            <Grid item xs={12} key={index}>
              <Paper
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                sx={{
                  background: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.1)',
                  position: 'relative',
                  transform: 'perspective(1000px) rotateX(0deg)',
                  transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateX(5deg) translateY(-10px)',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                    '& .project-image': {
                      transform: 'scale(1.1)',
                    },
                    '& .project-overlay': {
                      opacity: 0.9,
                    },
                    '& .project-content': {
                      transform: 'translateY(-5px)',
                    }
                  }
                }}
              >
                <Grid container>
                  <Grid item xs={12} md={6}>
                    <Box
                      sx={{
                        position: 'relative',
                        height: { xs: '200px', md: '400px' },
                        overflow: 'hidden'
                      }}
                    >
                      <Box
                        className="project-image"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          backgroundImage: `url(${project.image})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                        }}
                      />
                      <Box
                        className="project-overlay"
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(45deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 100%)',
                          opacity: 0.7,
                          transition: 'opacity 0.6s ease',
                        }}
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Box
                      className="project-content"
                      sx={{
                        p: 4,
                        height: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        transition: 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                      }}
                    >
                      <Box>
                        <Typography
                          variant="h4"
                          sx={{
                            color: '#ffffff',
                            fontWeight: 'bold',
                            mb: 2,
                            textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                          }}
                        >
                          {project.title}
                        </Typography>
                        <Typography
                          variant="body1"
                          sx={{
                            color: '#cccccc',
                            mb: 3,
                            lineHeight: 1.8,
                          }}
                        >
                          {project.description}
                        </Typography>
                        <Box sx={{ mb: 4 }}>
                          {project.highlights.map((highlight, i) => (
                            <Box
                              key={i}
                              sx={{
                                display: 'flex',
                                alignItems: 'center',
                                mb: 1,
                                color: '#cccccc',
                              }}
                            >
                              <Code sx={{ mr: 1, fontSize: 16, color: '#ffffff' }} />
                              <Typography variant="body2">{highlight}</Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                      <Box>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                          {project.technologies.map((tech, i) => (
                            <Chip
                              key={i}
                              label={tech}
                              sx={{
                                bgcolor: 'rgba(255,255,255,0.1)',
                                color: '#ffffff',
                                borderRadius: '8px',
                                '&:hover': {
                                  bgcolor: 'rgba(255,255,255,0.2)',
                                  transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.3s ease',
                              }}
                            />
                          ))}
                        </Box>
                        <Box sx={{ display: 'flex', gap: 2 }}>
                          
                          <Tooltip title="View Code">
                            <IconButton
                              component="a"
                              href={project.github}
                              target="_blank"
                              sx={{
                                color: '#ffffff',
                                bgcolor: 'rgba(255,255,255,0.1)',
                                '&:hover': {
                                  bgcolor: 'rgba(255,255,255,0.2)',
                                  transform: 'translateY(-2px)',
                                },
                                transition: 'all 0.3s ease',
                              }}
                            >
                              <GitHub />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Projects; 