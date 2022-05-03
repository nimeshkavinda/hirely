import classNames from "./CandidateProfile.module.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import CandidateHeader from "../CandidateHeader/CandidateHeader";
import ResumeView from "../ResumeView/ResumeView";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ac from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Spin } from "antd";

const CandidateProfile = () => {
  const urlParams = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ac.getCandidateByUid(urlParams.uid));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCandidateByUid = useSelector(({ getCandidateByUid }) =>
    getCandidateByUid.data ? getCandidateByUid.data : {}
  );

  const getCandidateByUidFetching = useSelector(
    ({ getCandidateByUid: { fetching } }) => {
      return fetching;
    }
  );

  return (
    <>
      <div className={classNames.wrapper}>
        <Header />
      </div>
      <Spin size="large" spinning={getCandidateByUidFetching}>
        <CandidateHeader candidate={getCandidateByUid.data} />
        <div className={classNames.wrapper}>
          <div className={classNames.candidateWrapper}>
            <div>
              <div className={classNames.section}>
                <div>Primary role</div>
                <div>{getCandidateByUid?.data?.role}</div>
              </div>
              <div className={classNames.section}>
                <div>About</div>
                <div className={classNames.about}>
                  {getCandidateByUid?.data?.about}
                </div>
              </div>
            </div>
            <div>
              <ResumeView resume={getCandidateByUid?.data?.resume} />
            </div>
          </div>
        </div>
      </Spin>
      <Footer />
    </>
  );
};

export default CandidateProfile;
