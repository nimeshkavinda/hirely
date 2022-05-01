import classNames from "./Header.module.scss";
import { Button, Avatar, Image, Dropdown, Menu, Space } from "antd";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();
  const menu = (
    <Menu>
      <Menu.Item key="Item">Profile</Menu.Item>
      <Menu.Item key="Item">Logout</Menu.Item>
    </Menu>
  );

  return (
    <div className={classNames.header}>
      <div className={classNames.logo} onClick={() => navigation("/")}>
        Hirely.
      </div>
      <div className={classNames.buttonWrapper}>
        <Button type="primary" onClick={() => navigation("/login")}>
          Candidate login
        </Button>
        <Button onClick={() => navigation("/admin-login")}>
          Employer login
        </Button>
      </div>
      {/* <div className={classNames.buttonWrapper}>
        <Button
          type="text"
          onClick={() => navigation("/")}
          style={{ marginRight: 20 }}
        >
          Applications
        </Button>
        <Dropdown overlay={menu}>
          <Space>
            <Avatar
              className={classNames.avatar}
              src={
                <Image
                  preview={false}
                  src="https://joeschmoe.io/api/v1/random"
                />
              }
            />
          </Space>
        </Dropdown>
      </div> */}
    </div>
  );
};

export default Header;
