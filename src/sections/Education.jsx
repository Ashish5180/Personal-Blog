import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Typography, Grid, Paper, Chip, IconButton, Tooltip, Divider, Container } from '@mui/material';
import { School, ArrowForward, EmojiEvents, Grade, Timeline } from '@mui/icons-material';

const education = [

  {
    degree: 'Bachelor of Technology in Computer Science',
    school: 'K.R Mangalam University',
    period: '2023 - 2027',
    description: 'Specialization in Full Stack Development',
    achievements: [
      'Top 10% of Class',
      'Participated in Hackathon',
    ],
    
    icon: <EmojiEvents sx={{ fontSize: 40 }} />,
    color: '#4ECDC4'
  },
  {
    degree: '12th Science',
    school: 'Jhankar.Sr.Sec.School',
    period: '2022 - 2023',
    description: 'Percentage: 74.2%',
    achievements: [
      'District Level Silver Medalist in Art and craft',
      'Basketball Player'
    ],
    icon: <Grade sx={{ fontSize: 40 }} />,
    color: '#FF6B6B'
  },
  
];

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <Box
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
        <Box 
          sx={{ 
            textAlign: 'center', 
            mb: 8,
            transform: 'translateY(0)',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'translateY(-5px)',
            }
          }}
        >
          <Typography
            variant="h2"
            component={motion.h2}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            sx={{
              fontWeight: 'bold',
              color: '#ffffff',
              position: 'relative',
              display: 'inline-block',
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
            Education
          </Typography>
          <Typography
            variant="h6"
            component={motion.p}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            sx={{
              color: '#cccccc',
              mt: 2,
            }}
          >
            My academic journey and achievements
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {education.map((edu, index) => (
            <Grid item xs={12} md={6} key={edu.degree}>
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
                  transform: 'perspective(1000px) rotateX(0)',
                  transition: 'all 0.3s ease',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `linear-gradient(45deg, transparent, ${edu.color}20, transparent)`,
                    transform: 'translateX(-100%)',
                    transition: 'transform 0.6s ease',
                  },
                  '&:hover': {
                    transform: 'perspective(1000px) rotateX(5deg) translateY(-10px)',
                    boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
                    '&::before': {
                      transform: 'translateX(100%)',
                    },
                  },
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                  <Box 
                    sx={{ 
                      color: edu.color,
                      mr: 2,
                      transform: 'scale(1)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.2) rotate(360deg)',
                      }
                    }}
                  >
                    {edu.icon}
                  </Box>
                  <Box>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        color: '#ffffff', 
                        fontWeight: 'bold',
                        transform: 'translateX(0)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateX(5px)',
                        }
                      }}
                    >
                      {edu.degree}
                    </Typography>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        color: '#cccccc',
                        transform: 'translateX(0)',
                        transition: 'transform 0.3s ease',
                        '&:hover': {
                          transform: 'translateX(5px)',
                        }
                      }}
                    >
                      {edu.school}
                    </Typography>
                  </Box>
                </Box>

                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    color: '#999999', 
                    mb: 2,
                    transform: 'translateX(0)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(5px)',
                    }
                  }}
                >
                  {edu.period}
                </Typography>

                <Typography 
                  variant="body1" 
                  sx={{ 
                    color: '#cccccc', 
                    mb: 3,
                    transform: 'translateX(0)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateX(5px)',
                    }
                  }}
                >
                  {edu.description}
                </Typography>

                <Divider sx={{ my: 3, bgcolor: 'rgba(255,255,255,0.1)' }} />

                <Box sx={{ mt: 2 }}>
                  <Typography 
                    variant="subtitle2" 
                    sx={{ 
                      color: edu.color, 
                      fontWeight: 'bold', 
                      mb: 2,
                      display: 'flex',
                      alignItems: 'center',
                      gap: 1,
                      transform: 'translateX(0)',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'translateX(5px)',
                      }
                    }}
                  >
                    <Timeline sx={{ fontSize: 16 }} />
                    Key Achievements
                  </Typography>
                  {edu.achievements.map((achievement, idx) => (
                    <Box
                      key={idx}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        mb: 1,
                        color: '#cccccc',
                        transform: 'translateX(0)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          color: edu.color,
                          transform: 'translateX(10px)',
                        },
                      }}
                    >
                      <ArrowForward 
                        sx={{ 
                          fontSize: 16, 
                          color: edu.color,
                          transform: 'translateX(0)',
                          transition: 'transform 0.3s ease',
                          '&:hover': {
                            transform: 'translateX(5px)',
                          }
                        }} 
                      />
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

export default Education; 