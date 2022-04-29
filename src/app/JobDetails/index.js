import classNames from "./JobDetails.module.scss";
import ViewJob from "./ViewJob/ViewJob";

const JobDetails = () => {
  return (
    <div className={classNames.wrapper}>
      <ViewJob />
    </div>
  );
};

export default JobDetails;
