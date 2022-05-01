import classNames from "./CreateJob.module.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Form, Input, Button, Select, Checkbox } from "antd";
import { BsPlus } from "react-icons/bs";

const CreateJob = () => {
  return (
    <>
      <div className={classNames.wrapper}>
        <Header />
      </div>
      <div className={classNames.heading}>Create job</div>
      <div className={classNames.formWrapper}>
        <Form layout="vertical">
          <Form.Item label="Job title">
            <Input />
          </Form.Item>
          <Form.Item>
            <Form.Item
              label="Industry"
              style={{ display: "inline-block", width: "49%", float: "left" }}
            >
              <Select />
            </Form.Item>
            <Form.Item
              label="Job type"
              style={{ display: "inline-block", width: "49%", float: "right" }}
            >
              <Select />
            </Form.Item>
          </Form.Item>
          <Form.Item label="Location">
            <Select />
          </Form.Item>
          <Form.Item label="Salary">
            <Select />
          </Form.Item>
          <Form.Item label="Job description">
            <Input.TextArea showCount maxLength={2500} />
          </Form.Item>
          <Form.Item>
            <Checkbox>This is a remote job</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button type="primary" className={classNames.submitButton}>
              <BsPlus />
              <span>Create new job</span>
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default CreateJob;