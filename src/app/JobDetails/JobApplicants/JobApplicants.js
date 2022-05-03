import classNames from "./JobApplicants.module.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import JobHeader from "./JobHeader/JobHeader";
import JobCandidates from "./JobCandidates/JobCandidates";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ac from "../../../redux/actions";
import { Spin } from "antd";

const JobApplicants = () => {
  const urlParams = useParams();
  const dispatch = useDispatch();
  const [jobApplicants, setJobApplicants] = useState([]);

  useEffect(() => {
    dispatch(ac.getJobById(urlParams.id));
    dispatch(ac.getCandidates());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobById = useSelector(({ getJobById }) =>
    getJobById.data ? getJobById.data[0] : {}
  );

  const getJobByIdFetching = useSelector(({ getJobById: { fetching } }) => {
    return fetching;
  });

  const getCandidates = useSelector(({ getCandidates }) =>
    getCandidates.data ? getCandidates.data : {}
  );

  const getCandidatesFetching = useSelector(
    ({ getCandidates: { fetching } }) => {
      return fetching;
    }
  );

  useEffect(() => {
    let candidatesArr = Object.keys(getCandidates).map((key) => {
      return getCandidates[key];
    });

    let jobApplicants = candidatesArr
      .filter((candidates) =>
        candidates.jobs.some((job) => {
          if (job.jobId === urlParams.id) {
            return job;
          }
          return null;
        })
      )
      .map((candidates) => candidates);

    let filteredApplicants = jobApplicants.map((applicant) => {
      applicant.filteredJobs = applicant.jobs.filter((job) =>
        urlParams.id.includes(job.jobId)
      );
      return applicant;
    });

    setJobApplicants(filteredApplicants);
  }, [getCandidates, urlParams]);

  return (
    <>
      <div className={classNames.wrapper}>
        <Header />
      </div>
      <Spin size="large" spinning={getJobByIdFetching || getCandidatesFetching}>
        <JobHeader job={getJobById} />
        <div className={classNames.wrapper}>
          <JobCandidates job={getJobById} candidates={jobApplicants} />
        </div>
      </Spin>
      <Footer />
    </>
  );
};

export default JobApplicants;
