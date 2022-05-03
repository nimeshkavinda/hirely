import classNames from "./Candidates.module.scss";
import { Input, Select, Button, Table, Form } from "antd";
import { RiSearchLine } from "react-icons/ri";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Candidates = ({ candidates }) => {
  const navigation = useNavigate();
  const [form] = Form.useForm();
  const [companyCandidates, setCompanyCandidates] = useState(candidates);

  const columns = [
    {
      title: "First name",
      dataIndex: "firstName",
      key: "firstName",
      render: (value) => {
        return <span className={classNames.fieldValue}>{value}</span>;
      },
    },
    {
      title: "Last name",
      dataIndex: "lastName",
      key: "lastName",
      render: (value) => {
        return <span className={classNames.fieldValue}>{value}</span>;
      },
    },
    {
      title: "Primary role",
      dataIndex: "role",
      key: "role",
      render: (value) => {
        return <span className={classNames.fieldValue}>{value}</span>;
      },
    },
    {
      title: "Mobile number",
      dataIndex: "mobile",
      key: "mobile",
      render: (value) => {
        return <span className={classNames.fieldValue}>{value}</span>;
      },
    },
    {
      title: "Email address",
      dataIndex: "email",
      key: "email",
      render: (value) => {
        return <span className={classNames.fieldValue}>{value}</span>;
      },
    },
    {
      title: "Jobs",
      dataIndex: "jobs",
      key: "jobs",
      render: (value) => {
        return <Button type="link">{value.length} applications</Button>;
      },
    },
  ];

  const resetCandidates = () => {
    form.resetFields();
    setCompanyCandidates(candidates);
  };

  const searchCandidates = (data) => {
    if (data.role === undefined) {
      setCompanyCandidates(
        companyCandidates &&
          companyCandidates.filter((candidate) => {
            return candidate.title
              .toLowerCase()
              .includes(data.keyword.toLowerCase());
          })
      );
    } else {
      setCompanyCandidates(
        companyCandidates &&
          companyCandidates.filter((candidate) => {
            return (
              candidate.firstName
                .toLowerCase()
                .includes(data.keyword.toLowerCase()) ||
              (candidate.lastName
                .toLowerCase()
                .includes(data.keyword.toLowerCase()) &&
                candidate.role
                  .toLowerCase()
                  .includes(data.jobType.toLowerCase()))
            );
          })
      );
    }
  };

  return (
    <div className={classNames.wrapper}>
      <div className={classNames.search}>
        <Form layout="inline" form={form} onFinish={searchCandidates}>
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
              placeholder="Candidate name or keyword"
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
          <Form.Item name="role">
            <Select
              placeholder="Primary role"
              size="large"
              optionFilterProp="children"
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              className={classNames.searchSelect}
              // style={{ width: "28vw" }}
            >
              {companyCandidates.map((candidate) => (
                <Select.Option key={candidate.uid} value={candidate.role}>
                  {candidate.roleƒ}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className={classNames.searchButton}
            onClick={searchCandidates}
            style={{ marginRight: 10 }}
          >
            Search
          </Button>
          <Button className={classNames.searchButton} onClick={resetCandidates}>
            Reset
          </Button>
        </Form>
      </div>
      <div className={classNames.resultCount}>
        {companyCandidates.length} Candidates found
      </div>
      <div className={classNames.tableWrapper}>
        <Table
          dataSource={companyCandidates}
          columns={columns}
          pagination={{ position: ["none", "bottomCenter"] }}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                navigation(`/candidate/${record.uid}`);
              },
            };
          }}
        />
      </div>
    </div>
  );
};

export default Candidates;
