import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';
import { Code, Storage, Cloud, Devices, Brush, Speed } from '@mui/icons-material';

const skills = [
  {
    category: "Frontend Development",
    mainSkill: "React",
    items: ["Next.js", "React js", "Framer Motion", "Redux", "Material UI"],
    icon: <Code sx={{ fontSize: 40 }} />,
    color: "#61DAFB"
  },
  {
    category: "Backend Development",
    mainSkill: "Node.js",
    items: ["Express", "MongoDB", "REST APIs", "JWT",
      "Authentication", "GraphQL", "MySQL"],
    icon: <Storage sx={{ fontSize: 40 }} />,
    color: "#68A063"
  },
  {
    category: "Deployment Services", 
    mainSkill: "AWS",
    items: ["EC2", "Heroku", "Vercel", "C-panel"],
    icon: <Cloud sx={{ fontSize: 40 }} />,
    color: "#FF9900"
  },
  {
    category: "Version Control",
    mainSkill: "Git/Github",
    items: ["Git", "Github"],
    icon: <Speed sx={{ fontSize: 40 }} />,
    color: "#7B1FA2"
  },
  {
    category: "Tools ",
    mainSkill: "Selenium ",
    items: ["Vs Code", "Postman" , "Selenium"],
    icon: <Devices sx={{ fontSize: 40 }} />,
    color: "#2196F3"
  },
  {
    category: "UI/UX Design",
    mainSkill: "Figma",
    items: ["Canva", "Figma"],
    icon: <Brush sx={{ fontSize: 40 }} />,
    color: "#FF4081"
  },
  
];

const SkillSphere = ({ skill, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.8,
          delay: index * 0.2,
          ease: [0.43, 0.13, 0.23, 0.96]
        }
      } : {}}
      whileHover={{ scale: 1.05 }}
      style={{ perspective: 1000 }}
    >
      <Paper
        elevation={24}
        sx={{
          position: 'relative',
          borderRadius: '30px',
          overflow: 'hidden',
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-10px)',
            boxShadow: `0 20px 40px ${skill.color}30`,
          }
        }}
      >
        <Box
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            position: 'relative',
            zIndex: 2,
          }}
        >
          <motion.div
            animate={{ 
              rotateY: [0, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear"
            }}
          >
            <Box
              className="skill-icon"
              sx={{
                color: skill.color,
                mb: 2,
              }}
            >
              {skill.icon}
            </Box>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Typography
              variant="h5"
              sx={{
                color: '#ffffff',
                fontWeight: 'bold',
                textAlign: 'center',
                mb: 1,
              }}
            >
              {skill.mainSkill}
            </Typography>
            <Typography
              variant="subtitle1"
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                textAlign: 'center',
                mb: 3,
                fontSize: '0.9rem',
              }}
            >
              {skill.category}
            </Typography>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.3 }}
          >
            <Grid container spacing={1}>
              {skill.items.map((item, i) => (
                <Grid item xs={6} key={i}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: i * 0.1 + index * 0.2 }}
                  >
                    <Box
                      sx={{
                        bgcolor: `${skill.color}15`,
                        borderRadius: '15px',
                        p: 1,
                        textAlign: 'center',
                        border: `1px solid ${skill.color}30`,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          bgcolor: `${skill.color}25`,
                          transform: 'translateY(-2px)',
                        }
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          color: '#ffffff',
                          fontSize: '0.8rem',
                          fontWeight: 500,
                        }}
                      >
                        {item}
                      </Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </motion.div>
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `radial-gradient(circle at center, ${skill.color}10 0%, transparent 70%)`,
            zIndex: 1,
          }}
        />
      </Paper>
    </motion.div>
  );
};

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="h2"
            align="center"
            sx={{
              mb: 2,
              fontWeight: 'bold',
              color: '#ffffff',
              textShadow: '0 0 10px rgba(255,255,255,0.3)',
            }}
          >
            Technical Expertise
          </Typography>
          <Typography
            variant="h5"
            align="center"
            sx={{
              mb: 8,
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '800px',
              mx: 'auto',
            }}
          >
            Mastering modern technologies to create exceptional digital experiences
          </Typography>
        </motion.div>

        <Grid 
          container 
          spacing={4}
          sx={{
            maxWidth: '1400px',
  justifyContent: 'center',
          }}
        >
          {skills.map((skill, index) => (
            <Grid item xs={12} sm={6} md={4} key={skill.category}>
              <SkillSphere skill={skill} index={index} inView={inView} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills; 