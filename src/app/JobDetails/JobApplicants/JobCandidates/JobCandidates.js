import { Table, Input, Select, Button } from "antd";
import { RiSearchLine } from "react-icons/ri";
import classNames from "./JobCandidates.module.scss";

const JobCandidates = () => {
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
          placeholder="Job"
          size="large"
          optionFilterProp="children"
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          className={classNames.searchSelect}
        >
          <Select.Option value="se">Software Engineer</Select.Option>
        </Select>
        <Button type="primary" className={classNames.searchButton}>
          Search
        </Button>
      </div>
      <div className={classNames.resultCount}>350 Candidates found</div>
      <div className={classNames.tableWrapper}>
        <Table
          // dataSource={dataSource}
          // columns={columns}
          pagination={{ position: ["none", "bottomCenter"] }}
        />
      </div>
    </div>
  );
};

export default JobCandidates;
