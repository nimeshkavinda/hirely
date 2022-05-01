import classNames from "./Header.module.scss";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  return (
    <div className={classNames.header}>
      <div className={classNames.logo}>Hirely.</div>
      <div className={classNames.buttonWrapper}>
        <Button type="primary" onClick={() => navigation("/login")}>
          Candidate login
        </Button>
        <Button onClick={() => navigation("/admin-login")}>
          Employer login
        </Button>
      </div>
    </div>
  );
};

export default Header;
