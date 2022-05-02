import classNames from "./JobCard.module.scss";
import { Image, Button, Tag } from "antd";
import { useNavigate } from "react-router-dom";
import moment from "moment";

const JobCard = ({
  id,
  companyLogo,
  created,
  title,
  companyName,
  noOfApplicants,
  jobType,
  modality,
  industry,
  location,
  salary,
  description,
}) => {
  const navigation = useNavigate();
  return (
    <div className={classNames.jobCard}>
      <div className={classNames.firstRow}>
        <Image
          width={60}
          height={60}
          preview={false}
          src={`${companyLogo}`}
          className={classNames.companyLogo}
        />
        <div>
          <div>{`{${created}}`}</div>
          <div>{noOfApplicants} applicants</div>
        </div>
      </div>
      <div className={classNames.titleRow}>
        <div>
          <div>{title}</div>
          <div>{companyName}</div>
        </div>
      </div>
      <div className={classNames.tagRow}>
        <Tag color="magenta">{jobType}</Tag>
        <Tag color="red">{modality}</Tag>
        <Tag color="volcano">{industry}</Tag>
      </div>
      <div className={classNames.location}>{location}</div>
      <div className={classNames.description}>{description}</div>
      <div className={classNames.salary}>LKR {salary}</div>
      <div className={classNames.buttonWrapper}>
        {/* <Button type="primary">Apply Now</Button> */}
        <Button onClick={() => navigation(`/job/${id}`)}>View Job</Button>
      </div>
    </div>
  );
};

export default JobCard;
