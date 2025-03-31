import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App'
import './index.css'

const theme = createTheme({
  palette: {
    mode: 'dark', // Set mode to 'dark' (optional)
    primary: {
      main: '#000000',
      light: '#333333',
      dark: '#000000',
    },
    background: {
      default: '#000000', // Set default background to black
      paper: '#121212', // Optional: Slightly lighter black for paper elements
    },
    text: {
      primary: '#ffffff', // White text for better contrast
      secondary: '#cccccc',
    },
  },
  typography: {
    fontFamily: '"Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 600 },
    h5: { fontWeight: 600 },
    h6: { fontWeight: 600 },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 0,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: '#121212', // Optional: Paper elements slightly lighter
        },
      },
    },
  },
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
