import classNames from "./CandidateCard.module.scss";
import { Image, Button } from "antd";
import { FaBriefcase, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../../../redux/actions";

const CandidateCard = ({ uid, profilePhoto, name, role, jobs, updated }) => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ac.getJobById(jobs[0].jobId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobById = useSelector(({ getJobById }) =>
    getJobById.data ? getJobById.data[0] : {}
  );

  return (
    <div className={classNames.candidateCard}>
      <div>
        <Image
          width={60}
          height={60}
          preview={false}
          src={`${profilePhoto}`}
          className={classNames.avatar}
        />
      </div>
      <div>
        <div className={classNames.name}>
          <div>{name}</div>
          <div>{role}</div>
        </div>
        <div className={classNames.details}>
          <div>
            <FaBriefcase />
            <div>Applied for</div>
            <Button type="link" className={classNames.linkButton}>
              {getJobById.data?.title}
            </Button>
          </div>
          <div>
            <FaClock />
            <div>{`${moment(updated).fromNow()}`}</div>
          </div>
        </div>
        <div className={classNames.buttonWrapper}>
          <Button
            type="primary"
            onClick={() => navigation(`/candidate/${uid}`)}
          >
            View Application
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
