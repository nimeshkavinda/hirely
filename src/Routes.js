import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Jobs from "./app/Jobs";
import Admin from "./app/Admin";
import JobDetails from "./app/JobDetails";
import EditJob from "./app/JobDetails/EditJob/EditJob";
import ViewJob from "./app/JobDetails/ViewJob/ViewJob";
import CreateJob from "./app/JobDetails/CreateJob/CreateJob";
import Login from "./app/Auth/Candidate/Login/Login";
import Register from "./app/Auth/Candidate/Register/Register";
import CompleteProfile from "./app/Auth/Candidate/CompleteProfile/CompleteProfile";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Jobs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="complete-profile" element={<CompleteProfile />} />
        </Route>
        <Route path="/job" element={<JobDetails />}>
          <Route path="create" element={<CreateJob />} />
          <Route path=":id" element={<ViewJob />} />
          <Route path=":id/edit" element={<EditJob />} />
        </Route>
        <Route path="app" element={<Admin />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
