import classNames from "./JobDetails.module.scss";
import { Outlet } from "react-router-dom";

const JobDetails = () => {
  return (
    <div className={classNames.wrapper}>
      <Outlet />
    </div>
  );
};

export default JobDetails;
