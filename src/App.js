import ThemeProvider from "./components/ThemeProvider/index";
import RTL from "./components/RTL/index";
import { CssBaseline } from "@mui/material";
import MasterLayout from "./screens/MasterLayout";
import LoginContextProvider from "./contexts/LoginContext";
function App() {
  return (
    <ThemeProvider>
      <RTL>
        <CssBaseline />
        <LoginContextProvider>
          <MasterLayout />
        </LoginContextProvider>
      </RTL>
    </ThemeProvider>
  );
}

export default App;
