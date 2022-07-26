import {
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#4b96e6",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans serif"].join(","),
  },
});

const ThemeLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        {children}
        <ToastContainer
          position="bottom-right"
          autoClose={8000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </ThemeProvider>
    </>
  );
};

export default ThemeLayout;
