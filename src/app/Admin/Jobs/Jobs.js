import classNames from "./Jobs.module.scss";
import { Input, Select, Button, Table } from "antd";
import { RiSearchLine } from "react-icons/ri";
import { useState, useEffect } from "react";
import ac from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Jobs = () => {
  const dispatch = useDispatch();
  const [jobs, setJobs] = useState();

  useEffect(() => {
    dispatch(ac.getJobs());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Job type",
      dataIndex: "jobType",
      key: "jobType",
    },
    {
      title: "Industry",
      dataIndex: "industry",
      key: "industry",
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Modality",
      dataIndex: "modality",
      key: "modality",
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
    },
    {
      title: "Candidates",
      dataIndex: "candidates",
      key: "candidates",
      render: (candidates) => {
        return <span>{candidates} applicants</span>;
      },
    },
  ];
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.search}>
        <Input
          placeholder="Job title or keyword"
          prefix={
            <RiSearchLine
              size={18}
              color="#A9A9A9"
              style={{ marginRight: 8 }}
            />
          }
          size="large"
          className={classNames.searchInput}
        />
        <Select
          placeholder="Job type"
          size="large"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          className={classNames.searchSelect}
        >
          <Select.Option value="fulltime">Full-time</Select.Option>
        </Select>
        <Button type="primary" className={classNames.searchButton}>
          Search
        </Button>
      </div>
      <div className={classNames.resultCount}>200 Jobs found</div>
      <div className={classNames.tableWrapper}>
        <Table
          dataSource={jobs}
          columns={columns}
          pagination={{ position: ["none", "bottomCenter"] }}
        />
      </div>
    </div>
  );
};

export default Jobs;
