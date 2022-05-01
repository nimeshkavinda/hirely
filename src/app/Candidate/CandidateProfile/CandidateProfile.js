import classNames from "./CandidateProfile.module.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import CandidateHeader from "../CandidateHeader/CandidateHeader";
import ResumeView from "../ResumeView/ResumeView";

const CandidateProfile = () => {
  return (
    <>
      <div className={classNames.wrapper}>
        <Header />
      </div>
      <CandidateHeader />
      <div className={classNames.wrapper}>
        <div className={classNames.candidateWrapper}>
          <div>
            <div className={classNames.section}>
              <div>Primary role</div>
              <div>Software Engineer</div>
            </div>
            <div className={classNames.section}>
              <div>About</div>
              <div className={classNames.about}>
                We are looking for a qualified Front-end developer to join our
                IT team. You will be responsible for building the ‘client-side’
                of our web applications. You should be able to translate our
                company and customer needs into functional and appealing
                interactive applications. If you’re interested in creating a
                user-friendly environment by writing code and moving forward in
                your career, then this job is for you. We expect you to be a
                tech-savvy professional, who is curious about new digital
                technologies and aspires to combine usability with visual
                design. Ultimately, you should be able to create a functional
                and attractive digital environment for our company, ensuring a
                great user experience.
              </div>
            </div>
          </div>
          <div>
            <ResumeView />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CandidateProfile;
