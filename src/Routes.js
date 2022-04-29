import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jobs from "./app/Jobs";
import Admin from "./app/Admin";
import JobDetails from "./app/JobDetails";
import EditJob from "./app/JobDetails/EditJob/EditJob";
import ViewJob from "./app/JobDetails/ViewJob/ViewJob";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Jobs />}></Route>
        </Route>
        <Route path="/job" element={<JobDetails />}>
          <Route path=":id" element={<ViewJob />} />
          <Route path=":id/edit" element={<EditJob />} />
        </Route>
        <Route path="app" element={<Admin />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
