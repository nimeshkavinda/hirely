import { Table } from "antd";
import classNames from "./JobCandidates.module.scss";
import { useNavigate } from "react-router-dom";

const JobCandidates = ({ job, candidates }) => {
  const navigation = useNavigate();
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
  ];
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.resultCount}>
        {candidates.length} applicants
      </div>
      <div className={classNames.tableWrapper}>
        <Table
          dataSource={candidates}
          columns={columns}
          pagination={{ position: ["none", "bottomCenter"] }}
          className={classNames.table}
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

export default JobCandidates;
