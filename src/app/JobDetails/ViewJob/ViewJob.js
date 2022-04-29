import classNames from "./ViewJob.module.scss";
import { Image, Button } from "antd";
import { BsDot } from "react-icons/bs";
import { FaBriefcase, FaGlobeAmericas } from "react-icons/fa";
import { HiOfficeBuilding } from "react-icons/hi";
import Header from "../../../components/Header/Header";

const ViewJob = () => {
  return (
    <div className={classNames.wrapper}>
      <Header />
      <div className={classNames.jobWrapper}>
        <div className={classNames.header}>
          <Image
            width={90}
            height={90}
            preview={false}
            src="https://wallpaperaccess.com/full/213588.jpg"
            className={classNames.companyLogo}
          />
          <div>Associate Software Engineer</div>
          <div>Apple Inc.</div>
        </div>
        <div className={classNames.details}>
          <div>
            <FaBriefcase size={16} color="#808080" />
            <span>Full-time</span>
          </div>
          <BsDot size={16} color="#808080" />
          <div>
            <HiOfficeBuilding size={16} color="#808080" />
            <span>IT Services</span>
          </div>
          <BsDot size={16} color="#808080" />
          <div>
            <FaGlobeAmericas size={16} color="#808080" />
            <span>Colombo, Sri Lanka</span>
          </div>
        </div>
        <div className={classNames.salary}>150,000 LKR - 250,000 LKR</div>
        <div className={classNames.buttonWrapper}>
          <Button type="primary">Apply for this job</Button>
        </div>
        <div className={classNames.description}>
          We are looking for a qualified Front-end developer to join our IT
          team. You will be responsible for building the ‘client-side’ of our
          web applications. You should be able to translate our company and
          customer needs into functional and appealing interactive applications.
          If you’re interested in creating a user-friendly environment by
          writing code and moving forward in your career, then this job is for
          you. We expect you to be a tech-savvy professional, who is curious
          about new digital technologies and aspires to combine usability with
          visual design. Ultimately, you should be able to create a functional
          and attractive digital environment for our company, ensuring a great
          user experience.
        </div>
        <div className={classNames.footer}>
          <div>Powered by</div>
          <div className={classNames.logo}>Hirely.</div>
        </div>
      </div>
    </div>
  );
};

export default ViewJob;
