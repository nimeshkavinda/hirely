import classNames from "./Jobs.module.scss";
import { Input, Select, Button, Table } from "antd";
import { RiSearchLine } from "react-icons/ri";

const Jobs = () => {
  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
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
          dataSource={dataSource}
          columns={columns}
          pagination={{ position: ["none", "bottomCenter"] }}
        />
      </div>
    </div>
  );
};

export default Jobs;
