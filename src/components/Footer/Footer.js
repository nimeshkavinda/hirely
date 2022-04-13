import classNames from "./Footer.module.scss";
import { Button } from "antd";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
} from "react-icons/ti";
import { BsDot } from "react-icons/bs";

const Footer = () => {
  return (
    <div className={classNames.footerWrapper}>
      <div className={classNames.eclipse} />
      <div className={classNames.footer}>
        <div className={classNames.footerHeader}>
          <h1>Hire your next superhero.</h1>
          <Button>Create an opening</Button>
        </div>
        <div className={classNames.footerBottom}>
          <div>
            <span className={classNames.logo}>Hirely.</span>
            <span>
              Jobs <BsDot />
            </span>
            <span>
              For businesses <BsDot />
            </span>
            <span>
              Customer support <BsDot />
            </span>
            <span>Frequently asked questions</span>
          </div>
          <div>
            <div>© Hirely {new Date().getFullYear()}.</div>
            <div>
              <TiSocialFacebook size={26} />
              <TiSocialTwitter size={26} />
              <TiSocialLinkedin size={26} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
