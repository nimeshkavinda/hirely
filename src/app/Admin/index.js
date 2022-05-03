import classNames from "./Admin.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CompanyHeader from "./Header/Header";
import { Spin, Tabs } from "antd";
import Dashboard from "./Dashboard/Dashboard";
import Jobs from "./Jobs/Jobs";
import Candidates from "./Candidates/Candidates";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../redux/actions";

const Admin = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");
  const [allJobsArr, setAllJobsArr] = useState([]);
  const [allCandidatesArr, setAllCandidatesArr] = useState([]);
  const [companyJobs, setCompanyJobs] = useState([]);
  const [companyCandidates, setCompanyCandidates] = useState([]);

  useEffect(() => {
    dispatch(ac.getJobs());
    dispatch(ac.getCandidates());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = useSelector(({ getJobs }) =>
    getJobs.data ? getJobs.data : {}
  );

  const getJobsFetching = useSelector(({ getJobs: { fetching } }) => {
    return fetching;
  });

  const getCandidates = useSelector(({ getCandidates }) =>
    getCandidates.data ? getCandidates.data : {}
  );

  const getCandidatesFetching = useSelector(
    ({ getCandidates: { fetching } }) => {
      return fetching;
    }
  );

  const employerData = useSelector(({ getEmployerByUid }) =>
    getEmployerByUid.data ? getEmployerByUid.data[0] : {}
  );

  useEffect(() => {
    let jobsArr = Object.keys(getJobs).map((key) => {
      return getJobs[key];
    });
    let candidatesArr = Object.keys(getCandidates).map((key) => {
      return getCandidates[key];
    });

    setAllJobsArr(jobsArr);
    setAllCandidatesArr(candidatesArr);
  }, [getJobsFetching, getJobs, getCandidates]);

  useEffect(() => {
    let empJobs = allJobsArr
      .filter((jobs) => jobs.company.uid === employerData?.uid)
      .map((jobs) => jobs);
    setCompanyJobs(empJobs);

    let empApplicants = allCandidatesArr
      .filter((candidates) =>
        candidates.jobs.some((job) => {
          if (job.employerUid === employerData?.uid) {
            return job;
          }
          return null;
        })
      )
      .map((candidates) => candidates);
    setCompanyCandidates(empApplicants);
  }, [allJobsArr, employerData, allCandidatesArr]);

  const showJobsTab = () => {
    setActiveTab("2");
  };

  const showCandidatesTab = () => {
    setActiveTab("3");
  };

  const changeTab = (key) => {
    setActiveTab(key.toString());
  };

  const { TabPane } = Tabs;

  return (
    <>
      <div className={classNames.wrapper}>
        <Header />
      </div>
      <CompanyHeader employer={employerData} />
      <Spin size="large" spinning={getJobsFetching || getCandidatesFetching}>
        <div className={classNames.wrapper}>
          <Tabs
            defaultActiveKey={activeTab}
            activeKey={activeTab}
            onChange={changeTab}
          >
            <TabPane tab="Dashboard" key="1">
              <Dashboard
                jobs={companyJobs}
                candidates={companyCandidates}
                showJobs={showJobsTab}
                showCandidates={showCandidatesTab}
              />
            </TabPane>
            <TabPane tab="Jobs" key="2">
              <Jobs jobs={companyJobs} />
            </TabPane>
            <TabPane tab="Candidates" key="3">
              <Candidates candidates={companyCandidates} />
            </TabPane>
          </Tabs>
        </div>
      </Spin>
      <Footer />
    </>
  );
};

export default Admin;
