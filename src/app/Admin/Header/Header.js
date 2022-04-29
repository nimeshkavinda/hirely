import classNames from "./Header.module.scss";
import { Avatar, Image, Button } from "antd";

const Header = () => {
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
            <div>Apple Inc.</div>
          </div>
          <div>
            <Button type="primary">Edit Company Profile</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
