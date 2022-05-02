import classNames from "./JobHeader.module.scss";
import { Avatar, Image, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { BsDot } from "react-icons/bs";
import { FaBriefcase, FaGlobeAmericas } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";

const JobHeader = () => {
  const navigation = useNavigate();
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.headerWrapper}>
        <div className={classNames.header}>
          <div>
            <Avatar
              className={classNames.logo}
              src={
                <Image
                  preview={false}
                  src={`https://gw.alipayobjects.com/zos/antfincdn/LlvErxo8H9/photo-1503185912284-5271ff81b9a8.webp`}
                />
              }
            />
            <div>Software Engineer</div>
            <div className={classNames.details}>
              <div>
                <FaBriefcase size={16} color="#808080" />
                <span>Full-time</span>
              </div>
              <BsDot size={16} color="#808080" />
              <div>
                <HiOfficeBuilding size={16} color="#808080" />
                <span>IT-services</span>
              </div>
              <BsDot size={16} color="#808080" />
              <div>
                <FaGlobeAmericas size={16} color="#808080" />
                <span>Colombo</span>
              </div>
            </div>
          </div>
          <div>
            <Button type="primary" onClick={() => navigation("/job/:id/edit")}>
              Edit job
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobHeader;
