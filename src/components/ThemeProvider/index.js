import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import theme from "../../theme/theme";

export default function Index({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
