import classNames from "./Header.module.scss";
import { Avatar, Image } from "antd";

const Header = () => {
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.headerWrapper}>
        <div className={classNames.header}>
          <Avatar
            className={classNames.logo}
            src={
              <Image preview={false} src="https://joeschmoe.io/api/v1/random" />
            }
          />
          <div>Apple Inc.</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
