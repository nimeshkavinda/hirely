import classNames from "./Jobs.module.scss";
import { Button, Input, Select } from "antd";
import { BsPlus } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";

const Jobs = () => {
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.header}>
        <div className={classNames.logo}>Hirely</div>
        <div className={classNames.buttonWrapper}>
          <Button type="link" className={classNames.linkButton}>
            <BsPlus /> Post a job
          </Button>
          <Button type="primary">Candidate login</Button>
          <Button>Employer login</Button>
        </div>
      </div>
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
    </div>
  );
};

export default Jobs;
