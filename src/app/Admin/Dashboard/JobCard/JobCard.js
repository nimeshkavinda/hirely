import classNames from "./JobCard.module.scss";
import { Image, Button, Tag } from "antd";
import { BsDot } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const JobCard = ({
  id,
  title,
  companyLogo,
  noOfApplicants,
  jobType,
  modality,
  industry,
  description,
  salary,
  location,
}) => {
  const navigation = useNavigate();
  return (
    <div className={classNames.jobCard}>
      <div className={classNames.titleRow}>
        <Image
          preview={false}
          src={`${companyLogo}`}
          className={classNames.companyLogo}
        />
        <div>
          <div>
            <div>{title}</div>
            <div>{noOfApplicants} applicants</div>
          </div>
          <div className={classNames.tagRow}>
            <Tag color="magenta">{jobType}</Tag>
            <Tag color="red">{modality}</Tag>
            <Tag color="volcano">{industry}</Tag>
          </div>
        </div>
      </div>
      <div className={classNames.description}>{description}</div>
      <div className={classNames.details}>
        <div className={classNames.location}>{location}</div>
        <BsDot />
        <div className={classNames.salary}>{salary}</div>
      </div>
      <div className={classNames.buttonWrapper}>
        <Button type="primary" onClick={() => navigation(`/job/${id}/edit`)}>
          Edit Job
        </Button>
        <Button onClick={() => navigation(`/job/${id}`)}>View Job</Button>
      </div>
    </div>
  );
};

export default JobCard;
