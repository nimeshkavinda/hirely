import classNames from "./Header.module.scss";
import { Button } from "antd";
import { BsPlus } from "react-icons/bs";

const Header = () => {
  return (
    <div className={classNames.header}>
      <div className={classNames.logo}>Hirely.</div>
      <div className={classNames.buttonWrapper}>
        <Button type="link" className={classNames.linkButton}>
          <BsPlus /> Post a job
        </Button>
        <Button type="primary">Candidate login</Button>
        <Button>Employer login</Button>
      </div>
    </div>
  );
};

export default Header;
