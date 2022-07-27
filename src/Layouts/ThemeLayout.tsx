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
    info: {
      light: "rgb(0 0 0 / 15%)",
      main: "#0006",
      dark: "rgb(0 0 0 / 50%)",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28,
        },
        outlinedPrimary: {
          "&:hover": {
            background: "#4b96e6",
            color: "#fff",
          },
        },
      },
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
