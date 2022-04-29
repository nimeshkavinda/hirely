import classNames from "./Admin.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const Admin = () => {
  return (
    <>
      <div className={classNames.wrapper}>
        <Header />
      </div>
      <Footer />
    </>
  );
};

export default Admin;
