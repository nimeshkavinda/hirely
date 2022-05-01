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
import AdminLogin from "./app/Auth/Employer/Login/Login";
import CreateAccount from "./app/Auth/Employer/CreateAccount/CreateAccount";
import Candidate from "./app/Candidate";
import CandidateProfile from "./app/Candidate/CandidateProfile/CandidateProfile";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Jobs />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="complete-profile" element={<CompleteProfile />} />
          <Route path="admin-login" element={<AdminLogin />} />
          <Route path="register-company" element={<CreateAccount />} />
        </Route>
        <Route path="/job" element={<JobDetails />}>
          <Route path="create" element={<CreateJob />} />
          <Route path=":id" element={<ViewJob />} />
          <Route path=":id/edit" element={<EditJob />} />
        </Route>
        <Route path="/candidate" element={<Candidate />}>
          <Route path=":uid" element={<CandidateProfile />} />
        </Route>
        <Route path="app" element={<Admin />}></Route>
      </Routes>
    </Router>
  );
}

export default AppRoutes;
