import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jobs from "./app/Jobs";
import Admin from "./app/Admin";
import JobDetails from "./app/JobDetails";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Jobs />}></Route>
          {/* <Route path="/admin" element={<Admin />}></Route> */}
        </Route>
        <Route path="/job/:id" element={<JobDetails />}></Route>
        <Route path="app" element={<Admin />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
