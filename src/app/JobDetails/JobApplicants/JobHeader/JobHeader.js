import classNames from "./JobHeader.module.scss";
import { Avatar, Image, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { FaBriefcase, FaGlobeAmericas } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";

const JobHeader = ({ job }) => {
  const navigation = useNavigate();
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.headerWrapper}>
        <div className={classNames.header}>
          <div>
            <Avatar
              className={classNames.logo}
              src={
                <Image preview={false} src={`${job?.company?.companyLogo}`} />
              }
            />
            <div>{job?.title}</div>
            <div className={classNames.details}>
              <div>
                <FaBriefcase size={16} color="#808080" />
                <span>{job?.jobType}</span>
              </div>
              <BsDot size={16} color="#808080" />
              <div>
                <HiOfficeBuilding size={16} color="#808080" />
                <span>{job?.industry}</span>
              </div>
              <BsDot size={16} color="#808080" />
              <div>
                <FaGlobeAmericas size={16} color="#808080" />
                <span>{job?.location}</span>
              </div>
            </div>
          </div>
          <div>
            <Button
              type="primary"
              onClick={() => navigation(`/job/${job.id}/edit`)}
            >
              Edit job
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
