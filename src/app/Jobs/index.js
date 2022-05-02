import classNames from "./Jobs.module.scss";
import { Button, Input, Select, Checkbox, Slider, Spin } from "antd";
import { RiSearchLine } from "react-icons/ri";
import Footer from "../../components/Footer/Footer";
import JobCard from "./JobCard/JobCard";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../redux/actions";
import jobTypes from "../../data/jobTypes.data";
import locations from "../../data/locations.data";

const Jobs = () => {
  const dispatch = useDispatch();
  const [allJobs, setAllJobs] = useState([]);
  const [jobTypesCount, setJobsTypesCount] = useState([]);

  useEffect(() => {
    dispatch(ac.getJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobs = useSelector(({ getJobs }) =>
    getJobs.data ? getJobs.data : {}
  );

  const getJobsFetching = useSelector(({ getJobs: { fetching } }) => {
    return fetching;
  });

  useEffect(() => {
    let jobsArr = Object.keys(getJobs).map((key) => {
      return getJobs[key];
    });
    if (!getJobsFetching) {
      setAllJobs(jobsArr);
    }
  }, [getJobs, getJobsFetching]);

  const getJobTypeCounts = () => {
    let fullTime = allJobs
      .filter((jobs) => jobs.jobType === jobTypes[0].value)
      .map((jobs) => jobs);

    let partTime = allJobs
      .filter((jobs) => jobs.jobType === jobTypes[1].value)
      .map((jobs) => jobs);

    let contract = allJobs
      .filter((jobs) => jobs.jobType === jobTypes[2].value)
      .map((jobs) => jobs);

    let internship = allJobs
      .filter((jobs) => jobs.jobType === jobTypes[3].value)
      .map((jobs) => jobs);

    setJobsTypesCount({
      fullTime: { ...fullTime, value: "full-time" },
      partTime: { ...partTime, value: "part-time" },
      contract: { ...contract, value: "contract" },
      internship: { ...internship, value: "internship" },
    });
  };

  useEffect(() => {
    getJobTypeCounts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allJobs]);

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
        <Spin size="large" spinning={getJobsFetching}>
          <div className={classNames.body}>
            <div className={classNames.bodyLeft}>
              <div className={classNames.filterWrapper}>
                <div className={classNames.filterHeading}>Filters</div>
                <div>
                  <div>Job type</div>
                  <div>
                    {Object.keys(jobTypesCount).map((type, index) => (
                      <div className={classNames.checkRow} key={index}>
                        <Checkbox>{jobTypesCount[type].value}</Checkbox>
                        <span>
                          {Object.keys(jobTypesCount[type]).length - 1}
                        </span>
                      </div>
                    ))}
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
                  <div>Location</div>
                  <div>
                    {locations.slice(0, 10).map((location, index) => (
                      <div className={classNames.checkRow} key={index}>
                        <Checkbox>{location}</Checkbox>
                        <span>10</span>
                      </div>
                    ))}
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
                </div>
              </div>
            </div>
            <div className={classNames.bodyRight}>
              <div className={classNames.bodyTopRow}>
                <div>
                  <span>Jobs</span>
                  <span>{allJobs.length}</span>
                </div>
                <div>
                  <span>Sort by </span>
                  <Select defaultValue="latest" bordered={false}>
                    <Select.Option value="latest">Latest</Select.Option>
                  </Select>
                </div>
              </div>
              <div className={classNames.jobCardWrapper}>
                {allJobs.map((job) => (
                  <JobCard
                    key={job.id}
                    id={job.id}
                    title={job.title}
                    noOfApplicants={job.candidates?.length}
                    companyLogo={job.company?.companyLogo}
                    companyName={job.company?.companyName}
                    description={job.description}
                    jobType={job.jobType}
                    modality={job.isRemote === true ? "Remote" : "In-office"}
                    salary={job.salary}
                    industry={job.industry}
                    location={job.location}
                    created={job.created}
                  />
                ))}
              </div>
            </div>
          </div>
        </Spin>
      </div>
      <Footer />
    </>
  );
};

export default Jobs;
