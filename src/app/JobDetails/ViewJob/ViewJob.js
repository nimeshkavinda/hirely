import classNames from "./ViewJob.module.scss";
import { Image, Button, Spin, message } from "antd";
import { BsDot } from "react-icons/bs";
import { FaBriefcase, FaGlobeAmericas } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
// import Header from "../../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ac from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ViewJob = () => {
  const urlParams = useParams();
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [uid, setUid] = useState(localStorage.getItem("uid"));
  const [userType, setUserType] = useState(localStorage.getItem("userType"));
  const [applyStatus, setApplyStatus] = useState(false);

  useEffect(() => {
    dispatch(ac.getJobById(urlParams.id));
    setUid(localStorage.getItem("uid"));
    setUserType(localStorage.getItem("userType"));
    if (localStorage.getItem("userType") === "candidate") {
      dispatch(ac.getCandidateByUid(localStorage.getItem("uid")));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobById = useSelector(({ getJobById }) =>
    getJobById.data ? getJobById.data[0] : {}
  );

  const getJobByIdFetching = useSelector(({ getJobById: { fetching } }) => {
    return fetching;
  });

  const getCandidateByUid = useSelector(
    ({ getCandidateByUid }) => getCandidateByUid
  );

  const getCandidateByUidFetching = useSelector(
    ({ getCandidateByUid: { fetching } }) => {
      return fetching;
    }
  );

  const updateJob = useSelector(({ updateJob }) =>
    updateJob.data ? updateJob.data : {}
  );

  const updateJobFetching = useSelector(({ updateJob: { fetching } }) => {
    return fetching;
  });

  const getEmployerByUid = useSelector(
    ({ getEmployerByUid }) => getEmployerByUid
  );

  const getEmployerByUidFetching = useSelector(
    ({ getEmployerByUid: { fetching } }) => {
      return fetching;
    }
  );

  useEffect(() => {
    if (!getJobByIdFetching && getJobById) {
      // console.log("job company id: ", getJobById.company.uid);
      dispatch(ac.getEmployerByUid(getJobById.company?.uid));
    }
  }, [getJobById, getJobByIdFetching, dispatch]);

  const onApply = () => {
    // console.log("job id: ", urlParams.id);
    // console.log("company uid: ", getJobById.company.uid);
    // console.log("candidate uid: ", uid);
    // console.log("emp data: ", getEmployerByUid.data[0]);
    // let employerData = Object.keys(getEmployerByUid.data).map((key) => {
    //   return getEmployerByUid.data[key];
    // });
    // console.log("emp arr: ", employerData[0]);
    // console.log("job", getJobById);

    dispatch(
      ac.updateJob(urlParams.id, {
        ...getJobById,
        candidates: [
          ...getJobById.candidates,
          {
            candidateUid: uid,
          },
        ],
      })
    );

    dispatch(
      ac.updateEmployer(getJobById.company.uid, {
        ...getEmployerByUid.data[0],
        candidates: [
          ...getEmployerByUid.data[0].candidates,
          {
            candidateUid: uid,
            jobId: urlParams.id,
          },
        ],
      })
    );

    dispatch(
      ac.updateCandidate(uid, {
        ...getCandidateByUid.data.data,
        jobs: [
          ...getCandidateByUid.data.data.jobs,
          {
            employerUid: getJobById.company.uid,
            jobId: urlParams.id,
          },
        ],
      })
    );
  };

  useEffect(() => {
    if (updateJob.status === "success") {
      let isFound = updateJob.data.candidates.some((candidate) => {
        if (candidate.candidateUid === uid) {
          return true;
        }
        return false;
      });
      if (isFound) {
        setApplyStatus(true);
        message.success("Successfully applied");
      } else {
        message.error("Failed to apply for job");
      }
    }
    if (updateJob.error) {
      message.error("Failed to apply for job");
    }
  }, [updateJob, uid, updateJobFetching, dispatch]);

  return (
    <div className={classNames.wrapper}>
      {/* <Header /> */}
      <Spin
        size="large"
        spinning={
          getJobByIdFetching ||
          getCandidateByUidFetching ||
          getEmployerByUidFetching
        }
      >
        <div className={classNames.jobWrapper}>
          <div className={classNames.header}>
            <Image
              width={90}
              height={90}
              preview={false}
              src={`${getJobById?.company?.companyLogo}`}
              className={classNames.companyLogo}
            />
            <div>{getJobById?.title}</div>
            <div>{getJobById?.company?.companyName}</div>
          </div>
          <div className={classNames.details}>
            <div>
              <FaBriefcase size={16} color="#808080" />
              <span>{getJobById?.jobType}</span>
            </div>
            <BsDot size={16} color="#808080" />
            <div>
              <HiOfficeBuilding size={16} color="#808080" />
              <span>{getJobById?.industry}</span>
            </div>
            <BsDot size={16} color="#808080" />
            <div>
              <FaGlobeAmericas size={16} color="#808080" />
              <span>{getJobById?.location}</span>
            </div>
          </div>
          <div className={classNames.salary}>LKR {getJobById?.salary}</div>
          <div className={classNames.buttonWrapper}>
            {userType === "employer" ? (
              <Button
                type="primary"
                onClick={() => navigation(`/job/${urlParams.id}/edit`)}
              >
                Edit job
              </Button>
            ) : (
              <Button
                type="primary"
                onClick={onApply}
                loading={
                  updateJobFetching ||
                  getCandidateByUidFetching ||
                  getEmployerByUidFetching
                }
                disabled={applyStatus}
              >
                {applyStatus ? "Already applied" : "Apply for this job"}
              </Button>
            )}
          </div>
          <div className={classNames.description}>
            {getJobById?.description}
          </div>
          <div className={classNames.footer}>
            <div>Powered by</div>
            <div className={classNames.logo}>Hirely.</div>
          </div>
        </div>
      </Spin>
    </div>
  );
};

export default ViewJob;
