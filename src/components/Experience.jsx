import { motion } from 'framer-motion';
import { Box, Typography, Grid, Paper } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Tech Company',
      duration: '2022 - Present',
      description: 'Led development of key features and maintained existing systems.',
      skills: ['React', 'Node.js', 'MongoDB'],
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Agency',
      duration: '2021 - 2022',
      description: 'Developed responsive web applications and improved user experience.',
      skills: ['JavaScript', 'CSS', 'HTML'],
    },
    {
      title: 'Junior Developer',
      company: 'Startup',
      duration: '2020 - 2021',
      description: 'Worked on various projects and learned modern development practices.',
      skills: ['Python', 'Django', 'SQL'],
    },
  ];

  return (
    <Box
      id="experience"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 8,
        background: 'linear-gradient(180deg, #000000 0%, #1a1a1a 100%)',
        position: 'absolute',
        left: 0,
        right: 0,
        width: '100%',
        overflow: 'hidden',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        style={{ width: '100%' }}
      >
        <Box sx={{ textAlign: 'center', mb: 6, px: { xs: 2, sm: 4, md: 6 } }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{
              color: '#ffffff',
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
            }}
          >
            Work Experience
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: '#cccccc',
              mb: 4,
              fontSize: { xs: '1rem', sm: '1.2rem', md: '1.4rem' },
            }}
          >
            My professional journey and achievements
          </Typography>
        </Box>

        <Grid container spacing={0}>
          {experiences.map((exp, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                style={{ height: '100%' }}
              >
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: '0 8px 30px rgba(0, 0, 0, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                    },
                    mx: { xs: 0, sm: 0, md: 0 },
                    mb: { xs: 4, md: 0 },
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <WorkIcon sx={{ color: '#ffffff', mr: 1 }} />
                    <Typography
                      variant="h5"
                      sx={{
                        color: '#ffffff',
                        fontWeight: 'bold',
                      }}
                    >
                      {exp.title}
                    </Typography>
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{
                      color: '#cccccc',
                      mb: 1,
                    }}
                  >
                    {exp.company}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: '#999999',
                      mb: 2,
                    }}
                  >
                    {exp.duration}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      color: '#ffffff',
                      mb: 2,
                    }}
                  >
                    {exp.description}
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {exp.skills.map((skill, skillIndex) => (
                      <Typography
                        key={skillIndex}
                        variant="body2"
                        sx={{
                          color: '#ffffff',
                          background: 'rgba(255, 255, 255, 0.1)',
                          px: 1,
                          py: 0.5,
                          borderRadius: 1,
                        }}
                      >
                        {skill}
                      </Typography>
                    ))}
                  </Box>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Box>
  );
};

export default Experience; 