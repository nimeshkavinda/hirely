import classNames from "./CandidateHeader.module.scss";
import { Avatar, Image, Button } from "antd";
import { AiFillMail, AiFillPhone } from "react-icons/ai";

const CandidateHeader = () => {
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
                  src="https://joeschmoe.io/api/v1/random"
                />
              }
            />
            <div>Nimesh Kavinda</div>
          </div>
          <div className={classNames.contact}>
            <div>
              <AiFillPhone size={16} />
              <Button type="link" className={classNames.linkButton}>
                +94 71 695 6139
              </Button>
            </div>
            <div>
              <AiFillMail size={16} />
              <Button type="link" className={classNames.linkButton}>
                nimeshkavinda13@gmail.com
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateHeader;
