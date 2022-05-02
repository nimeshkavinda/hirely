import classNames from "./ViewJob.module.scss";
import { Image, Button, Spin } from "antd";
import { BsDot } from "react-icons/bs";
import { FaBriefcase, FaGlobeAmericas } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
// import Header from "../../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ac from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const ViewJob = () => {
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
    <div className={classNames.wrapper}>
      {/* <Header /> */}
      <Spin size="large" spinning={getJobByIdFetching}>
        <div className={classNames.jobWrapper}>
          <div className={classNames.header}>
            <Image
              width={90}
              height={90}
              preview={false}
              src="https://wallpaperaccess.com/full/213588.jpg"
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
            <Button type="primary">Apply for this job</Button>
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
