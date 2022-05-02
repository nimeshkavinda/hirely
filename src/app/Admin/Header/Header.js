import classNames from "./Header.module.scss";
import { Avatar, Image, Button } from "antd";
import { BsPlus } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Header = ({ employer }) => {
  const navigation = useNavigate();
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.headerWrapper}>
        <div className={classNames.header}>
          <div>
            <Avatar
              className={classNames.logo}
              src={<Image preview={false} src={`${employer?.companyLogo}`} />}
            />
            <div>{employer?.companyName}</div>
          </div>
          <div>
            <Button
              type="link"
              className={classNames.linkButton}
              onClick={() => navigation("/job/create")}
            >
              <BsPlus /> Post a job
            </Button>
            <Button type="primary">Edit Company Profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
