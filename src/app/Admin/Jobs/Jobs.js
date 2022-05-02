import classNames from "./Jobs.module.scss";
import { Input, Select, Button, Table, Form } from "antd";
import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";
import jobTypes from "../../../data/jobTypes.data";

const Jobs = ({ jobs }) => {
  const [form] = Form.useForm();
  const [companyJobs, setCompanyJobs] = useState(jobs);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
      render: (value) => {
        return <span className={classNames.fieldValue}>{value}</span>;
      },
    },
    {
      title: "Job type",
      dataIndex: "jobType",
      key: "jobType",
      render: (value) => {
        return <span className={classNames.fieldValue}>{value}</span>;
      },
    },
    {
      title: "Industry",
      dataIndex: "industry",
      key: "industry",
      render: (value) => {
        return <span className={classNames.fieldValue}>{value}</span>;
      },
    },
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      render: (value) => {
        return <span className={classNames.fieldValue}>{value}</span>;
      },
    },
    {
      title: "Modality",
      dataIndex: "modality",
      key: "modality",
      render: (modality) => {
        return <span>{modality ? "Remote" : "In-office"}</span>;
      },
    },
    {
      title: "Salary",
      dataIndex: "salary",
      key: "salary",
      render: (value) => {
        return <span className={classNames.fieldValue}>{value} LKR</span>;
      },
    },
    {
      title: "Candidates",
      dataIndex: "candidates",
      key: "candidates",
      render: (candidates) => {
        return <Button type="link">{candidates.length} applicants</Button>;
      },
    },
  ];

  const resetJobs = () => {
    form.resetFields();
    setCompanyJobs(jobs);
  };

  const searchJobs = (data) => {
    if (data.jobType === undefined) {
      setCompanyJobs(
        companyJobs &&
          companyJobs.filter((job) => {
            return job.title.toLowerCase().includes(data.keyword.toLowerCase());
          })
      );
    } else {
      setCompanyJobs(
        companyJobs &&
          companyJobs.filter((job) => {
            return (
              job.title.toLowerCase().includes(data.keyword.toLowerCase()) &&
              job.jobType.toLowerCase().includes(data.jobType.toLowerCase())
            );
          })
      );
    }
  };

  return (
    <div className={classNames.wrapper}>
      <div className={classNames.search}>
        <Form layout="inline" form={form} onFinish={searchJobs}>
          <Form.Item
            name="keyword"
            rules={[
              {
                required: true,
                message: "Please input a search keyword!",
              },
            ]}
          >
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
          </Form.Item>
          <Form.Item
            name="jobType"
            // rules={[
            //   {
            //     required: true,
            //     message: "Please input job type!",
            //   },
            // ]}
          >
            <Select
              placeholder="Job type"
              size="large"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              className={classNames.searchSelect}
              // style={{ width: "28vw" }}
            >
              {jobTypes.map((type) => (
                <Select.Option key={type.id} value={type.value}>
                  {type.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={classNames.searchButton}
            onClick={searchJobs}
            style={{ marginRight: 10 }}
          >
            Search
          </Button>
          <Button className={classNames.searchButton} onClick={resetJobs}>
            Reset
          </Button>
        </Form>
      </div>
      <div className={classNames.resultCount}>
        {companyJobs.length} Jobs found
      </div>
      <div className={classNames.tableWrapper}>
        <Table
          dataSource={companyJobs}
          columns={columns}
          pagination={{ position: ["none", "bottomCenter"] }}
        />
      </div>
    </div>
  );
};

export default Jobs;
