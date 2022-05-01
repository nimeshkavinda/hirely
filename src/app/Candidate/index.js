import classNames from "./Candidate.module.scss";
import { Outlet } from "react-router-dom";

const Candidate = () => {
  return (
    <div className={classNames.wrapper}>
      <Outlet />
    </div>
  );
};

export default Candidate;
