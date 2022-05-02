import classNames from "./JobApplicants.module.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import JobHeader from "./JobHeader/JobHeader";
import JobCandidates from "./JobCandidates/JobCandidates";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import ac from "../../../redux/actions";
import { Spin } from "antd";

const JobApplicants = () => {
  const urlParams = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ac.getJobById(urlParams.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobById = useSelector(({ getJobById }) =>
    getJobById.data ? getJobById.data[0] : {}
  );

  const getJobByIdFetching = useSelector(({ getJobById: { fetching } }) => {
    return fetching;
  });

  return (
    <>
      <div className={classNames.wrapper}>
        <Header />
      </div>
      <Spin size="large" spinning={getJobByIdFetching}>
        <JobHeader job={getJobById} />
        <div className={classNames.wrapper}>
          <JobCandidates />
        </div>
      </Spin>
      <Footer />
    </>
  );
};

export default JobApplicants;
