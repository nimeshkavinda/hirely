import classNames from "./JobCard.module.scss";
import { Image, Button, Tag } from "antd";
import { BsDot } from "react-icons/bs";

const JobCard = () => {
  return (
    <div className={classNames.jobCard}>
      <div className={classNames.titleRow}>
        <Image
          width={60}
          height={60}
          preview={false}
          src="https://wallpaperaccess.com/full/213588.jpg"
          className={classNames.companyLogo}
        />
        <div>
          <div>
            <div>UX Designer</div>
            <div>13 applicants</div>
          </div>
          <div className={classNames.tagRow}>
            <Tag color="magenta">full-time</Tag>
            <Tag color="red">in-office</Tag>
            <Tag color="volcano">IT-services</Tag>
          </div>
        </div>
      </div>
      <div className={classNames.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </div>
      <div className={classNames.details}>
        <div className={classNames.location}>Colombo, Sri Lanka</div>
        <BsDot />
        <div className={classNames.salary}>150,000 LKR - 250,000 LKR</div>
      </div>
      <div className={classNames.buttonWrapper}>
        <Button type="primary">Edit Job</Button>
        <Button>View Job</Button>
      </div>
    </div>
  );
};

export default JobCard;
