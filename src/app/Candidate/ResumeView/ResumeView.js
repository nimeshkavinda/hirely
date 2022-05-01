import classNames from "./ResumeView.module.scss";
import resume from "../../../assets/resume-sample.pdf";

const ResumeView = () => {
  return (
    <div className={classNames.resumeWrapper}>
      <div>Resume</div>
      <iframe
        // src={resume}
        src={`${resume}#zoom=${100}&view=Fit`}
        title="resume"
        frameBorder="0"
        className={classNames.resume}
      />
    </div>
  );
};

export default ResumeView;
