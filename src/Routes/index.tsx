import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { routePaths } from "../api/routePaths";
import AppLayout from "../Layouts/App";
import HomePage from "../Pages/Home";
import JobPage from "../Pages/Job";
import NotFound from "../Pages/NotFound";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={routePaths.root}
          element={<AppLayout />}
        >
          <Route index element={<HomePage />} />
          <Route path={routePaths.job}>
            <Route
              path={routePaths.p_jobId}
              element={<JobPage />}
            />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
