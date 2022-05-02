import classNames from "./JobApplicants.module.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import JobHeader from "./JobHeader/JobHeader";
import JobCandidates from "./JobCandidates/JobCandidates";

const JobApplicants = () => {
  return (
    <>
      <div className={classNames.wrapper}>
        <Header />
      </div>
      <JobHeader />
      {/* <Spin size="large" spinning={getJobsFetching}> */}
      <div className={classNames.wrapper}>
        <JobCandidates />
      </div>
      {/* </Spin> */}
      <Footer />
    </>
  );
};

export default JobApplicants;
