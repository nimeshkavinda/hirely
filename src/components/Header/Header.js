import classNames from "./Header.module.scss";
import { Button, Avatar, Image, Dropdown, Menu, Space, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../redux/actions";
import { getAuth, signOut } from "firebase/auth";

const Header = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [uid, setUid] = useState();
  const [token, setToken] = useState();
  const [userType, setUserType] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setUid(localStorage.getItem("uid"));
    setUserType(localStorage.getItem("userType"));
    setToken(localStorage.getItem("accessToken"));
    if (localStorage.getItem("token") === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    if (token === null) {
      setIsLoggedIn(false);
    } else {
      setIsLoggedIn(true);
    }
  }, [token]);

  useEffect(() => {
    if (userType === "employer") {
      dispatch(ac.getEmployerByUid(uid));
    }
  }, [uid, userType, dispatch]);

  const employerData = useSelector(({ getEmployerByUid }) =>
    getEmployerByUid.data ? getEmployerByUid.data[0] : {}
  );

  const globalLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        localStorage.clear();
        setIsLoggedIn(false);
        navigation("/");
      })
      .catch((error) => {
        message.error(error);
      });
  };

  const UserOptions = () => {
    if (isLoggedIn && userType === "employer") {
      return (
        <div className={classNames.buttonWrapper}>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="Item">Profile</Menu.Item>
                <Menu.Item key="Item" onClick={globalLogOut}>
                  Logout
                </Menu.Item>
              </Menu>
            }
          >
            <Space>
              <Avatar
                className={classNames.avatar}
                src={
                  <Image preview={false} src={`${employerData?.companyLogo}`} />
                }
              />
            </Space>
          </Dropdown>
        </div>
      );
    }
    if (isLoggedIn && userType === "candidate") {
      return (
        <div className={classNames.buttonWrapper}>
          <Button
            type="text"
            onClick={() => navigation("/")}
            style={{ marginRight: 20 }}
          >
            Applications
          </Button>
          <Dropdown
            overlay={
              <Menu>
                <Menu.Item key="Item">Profile</Menu.Item>
                <Menu.Item key="Item" onClick={globalLogOut}>
                  Logout
                </Menu.Item>
              </Menu>
            }
          >
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
        </div>
      );
    } else
      return (
        <div className={classNames.buttonWrapper}>
          <Button type="primary" onClick={() => navigation("/login")}>
            Candidate login
          </Button>
          <Button onClick={() => navigation("/admin-login")}>
            Employer login
          </Button>
        </div>
      );
  };
  return (
    <div className={classNames.header}>
      <div
        className={classNames.logo}
        onClick={() => {
          userType === "employer" ? navigation("/app") : navigation("/");
        }}
      >
        Hirely.
      </div>
      <UserOptions />
    </div>
  );
};

export default Header;
