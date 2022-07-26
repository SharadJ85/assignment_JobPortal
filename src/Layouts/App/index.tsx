import { Outlet } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";

export default function AppLayout() {
  return (
    <>
      <CssBaseline />
      <header></header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
