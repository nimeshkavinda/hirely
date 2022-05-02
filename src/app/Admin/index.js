import classNames from "./Admin.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CompanyHeader from "./Header/Header";
import { Tabs } from "antd";
import Dashboard from "./Dashboard/Dashboard";
import Jobs from "./Jobs/Jobs";
import Candidates from "./Candidates/Candidates";
import { useState } from "react";
import { useSelector } from "react-redux";

const Admin = () => {
  const [activeTab, setActiveTab] = useState("1");

  const employerData = useSelector(({ getEmployerByUid }) =>
    getEmployerByUid.data ? getEmployerByUid.data[0] : {}
  );

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
      <div className={classNames.wrapper}>
        <Tabs
          defaultActiveKey={activeTab}
          activeKey={activeTab}
          onChange={changeTab}
        >
          <TabPane tab="Dashboard" key="1">
            <Dashboard
              showJobs={showJobsTab}
              showCandidates={showCandidatesTab}
            />
          </TabPane>
          <TabPane tab="Jobs" key="2">
            <Jobs />
          </TabPane>
          <TabPane tab="Candidates" key="3">
            <Candidates />
          </TabPane>
        </Tabs>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
