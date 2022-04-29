import classNames from "./CandidateCard.module.scss";
import { Image, Button } from "antd";
import { FaBriefcase, FaClock } from "react-icons/fa";

const CandidateCard = () => {
  return (
    <div className={classNames.candidateCard}>
      <div>
        <Image
          width={60}
          height={60}
          preview={false}
          src="https://joeschmoe.io/api/v1/random"
          className={classNames.avatar}
        />
      </div>
      <div>
        <div className={classNames.name}>
          <div>Nimesh Kavinda</div>
          <div>Software Engineer</div>
        </div>
        <div className={classNames.details}>
          <div>
            <FaBriefcase />
            <div>Applied for</div>
            <Button type="link" className={classNames.linkButton}>
              Associate Software Engineer
            </Button>
          </div>
          <div>
            <FaClock />
            <div>55 minutes ago</div>
          </div>
        </div>
        <div className={classNames.buttonWrapper}>
          <Button type="primary">View Application</Button>
        </div>
      </div>
    </div>
  );
};

export default CandidateCard;
