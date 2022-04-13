import classNames from "./JobCard.module.scss";
import { Image, Button, Tag } from "antd";

const JobCard = () => {
  return (
    <div className={classNames.jobCard}>
      <div className={classNames.firstRow}>
        <Image
          width={60}
          height={60}
          preview={false}
          src="https://wallpaperaccess.com/full/213588.jpg"
          className={classNames.companyLogo}
        />
        <span>13 April</span>
      </div>
      <div className={classNames.titleRow}>
        <div>
          <div>UX Designer</div>
          <div>Apple Inc</div>
        </div>
        <div>10 applicants</div>
      </div>
      <div className={classNames.tagRow}>
        <Tag color="magenta">full-time</Tag>
        <Tag color="red">in-office</Tag>
        <Tag color="volcano">IT-services</Tag>
      </div>
      <div className={classNames.location}>Colombo, Sri Lanka</div>
      <div className={classNames.description}>
        Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor
        sit amet
      </div>
      <div className={classNames.salary}>150,000 LKR - 250,000 LKR</div>
      <div className={classNames.buttonWrapper}>
        <Button type="primary">Apply Now</Button>
        <Button>View Job</Button>
      </div>
    </div>
  );
};

export default JobCard;
