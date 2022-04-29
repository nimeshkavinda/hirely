import classNames from "./Admin.module.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CompanyHeader from "./Header/Header";
import { Tabs } from "antd";
import Dashboard from "./Dashboard/Dashboard";

const Admin = () => {
  const { TabPane } = Tabs;
  return (
    <>
      <div className={classNames.wrapper}>
        <Header />
      </div>
      <CompanyHeader />
      <div className={classNames.wrapper}>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Dashboard" key="1">
            <Dashboard />
          </TabPane>
          <TabPane tab="Jobs" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane tab="Candidates" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
      <Footer />
    </>
  );
};

export default Admin;
