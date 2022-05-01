import classNames from "./Jobs.module.scss";
import { Button, Input, Select, Checkbox, Slider } from "antd";
import { RiSearchLine } from "react-icons/ri";
import Footer from "../../components/Footer/Footer";
import JobCard from "./JobCard/JobCard";
import Header from "../../components/Header/Header";

const Jobs = () => {
  return (
    <>
      <div className={classNames.wrapper}>
        <Header />
        <div className={classNames.search}>
          <Input
            placeholder="Job title or keyword"
            bordered={false}
            prefix={
              <RiSearchLine
                size={21}
                color="#A9A9A9"
                style={{ marginRight: 8 }}
              />
            }
            size="large"
            className={classNames.searchInput}
          />
          <Select
            placeholder="Job location"
            bordered={false}
            showSearch
            size="large"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            className={classNames.searchSelect}
          >
            <Select.Option value="colombo">Colombo</Select.Option>
          </Select>
          <Button type="primary" className={classNames.searchButton}>
            Search
          </Button>
        </div>
        <div className={classNames.body}>
          <div className={classNames.bodyLeft}>
            <div className={classNames.filterWrapper}>
              <div className={classNames.filterHeading}>Filters</div>
              <div>
                <div>Job type</div>
                <div className={classNames.checkRow}>
                  <Checkbox>Full-time</Checkbox>
                  <span>10</span>
                </div>
                <div className={classNames.checkRow}>
                  <Checkbox>Part-time</Checkbox>
                  <span>5</span>
                </div>
                <div className={classNames.checkRow}>
                  <Checkbox>Contract</Checkbox>
                  <span>14</span>
                </div>
                <div className={classNames.checkRow}>
                  <Checkbox>Internship</Checkbox>
                  <span>16</span>
                </div>
              </div>
              <div>
                <div>Modality</div>
                <div className={classNames.checkRow}>
                  <Checkbox>In-office</Checkbox>
                  <span>16</span>
                </div>
                <div className={classNames.checkRow}>
                  <Checkbox>Remote</Checkbox>
                  <span>16</span>
                </div>
              </div>
              <div>
                <div>Country</div>
                <div className={classNames.checkRow}>
                  <Checkbox>Sri Lanka</Checkbox>
                  <span>116</span>
                </div>
                <div className={classNames.checkRow}>
                  <Checkbox>Singapore</Checkbox>
                  <span>16</span>
                </div>
              </div>
              <div>
                <div>Salary</div>
                <Slider
                  marks={{
                    0: "0 LKR",
                    100: {
                      label: <span>100,000 LKR</span>,
                    },
                  }}
                />
                <Checkbox style={{ marginTop: 16 }}>
                  Include if no salary specified
                </Checkbox>
              </div>
            </div>
          </div>
          <div className={classNames.bodyRight}>
            <div className={classNames.bodyTopRow}>
              <div>
                <span>Jobs</span>
                <span>210</span>
              </div>
              <div>
                <span>Sort by </span>
                <Select defaultValue="latest" bordered={false}>
                  <Select.Option value="latest">Latest</Select.Option>
                </Select>
              </div>
            </div>
            <div className={classNames.jobCardWrapper}>
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
              <JobCard />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Jobs;
