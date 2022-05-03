import classNames from "./CandidateHeader.module.scss";
import { Avatar, Image, Button } from "antd";
import { AiFillMail, AiFillPhone } from "react-icons/ai";

const CandidateHeader = ({ candidate }) => {
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.headerWrapper}>
        <div className={classNames.header}>
          <div>
            <Avatar
              className={classNames.logo}
              src={<Image preview={false} src={`${candidate?.profilePhoto}`} />}
            />
            <div>{`${candidate?.firstName} ${candidate?.lastName}`}</div>
          </div>
          <div className={classNames.contact}>
            <div>
              <AiFillPhone size={16} />
              <Button type="link" className={classNames.linkButton}>
                {candidate?.mobile}
              </Button>
            </div>
            <div>
              <AiFillMail size={16} />
              <Button type="link" className={classNames.linkButton}>
                {candidate?.email}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateHeader;
