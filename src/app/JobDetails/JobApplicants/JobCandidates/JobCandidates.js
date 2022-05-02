import { Table } from "antd";
import classNames from "./JobCandidates.module.scss";

const JobCandidates = () => {
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
      title: "Role",
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
      <div className={classNames.resultCount}>350 applicants</div>
      <div className={classNames.tableWrapper}>
        <Table
          // dataSource={dataSource}
          columns={columns}
          pagination={{ position: ["none", "bottomCenter"] }}
          className={classNames.table}
          onRow={(record, rowIndex) => {
            return {
              onClick: (event) => {
                console.log(event, record);
              },
            };
          }}
        />
      </div>
    </div>
  );
};

export default JobCandidates;
