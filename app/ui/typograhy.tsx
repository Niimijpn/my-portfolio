'use client'
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    typography: {
      h1: {
        fontSize: "2rem",
        fontWeight: 500,
        lineHeight: 1.75,
        letterSpacing: "-0.035em"
      },
      h2: {
        fontSize: "1.65rem",
        fontWeight: 500,
        lineHeight: 1.6,
        letterSpacing: "-0.03em"
      },
      h3: {
        fontSize: "1.5rem",
        fontWeight: 500,
        lineHeight: 1.5,
        letterSpacing: "-0.025em"
      },
      h4: {
        fontSize: "1.25rem",
        lineHeight: 1.5,
        letterSpacing: "-0.02em"
      },
      body1: {
        lineHeight: 1.7,
        letterSpacing: "0.05em"
      },
      caption: {
        fontSize: "0.85rem",
        lineHeight: 1.75,
        letterSpacing: "0.075em",
        color: '#DADADB',
      },
      button: {
        fontSize: "0.85rem",
        fontWeight: 500
      },
      fontFamily: "'Noto Sans JP', sans-serif"
    }
  })