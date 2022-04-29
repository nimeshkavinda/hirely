import classNames from "./EditJob.module.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";

const EditJob = () => {
  return (
    <>
      <div className={classNames.wrapper}>
        <Header />
      </div>
      <div className={classNames.heading}>Edit job</div>
      <div className={classNames.wrapper}></div>
      <Footer />
    </>
  );
};

export default EditJob;
