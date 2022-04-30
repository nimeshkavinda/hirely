import classNames from "./CreateAccount.module.scss";
import { Card, Form, Input, Button, Upload } from "antd";
import { GrAdd } from "react-icons/gr";

const CreateAccount = () => {
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.authWrapper}>
        <div className={classNames.header}>
          <div>Create your company account</div>
        </div>
        <Card className={classNames.formCard}>
          <Form layout="vertical">
            <Form.Item label="Company logo">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
              >
                <GrAdd />
              </Upload>
            </Form.Item>
            <Form.Item>
              <Form.Item
                label="First name"
                style={{
                  display: "inline-block",
                  float: "left",
                  width: "49%",
                  marginBottom: 0,
                }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Last name"
                style={{
                  display: "inline-block",
                  float: "right",
                  width: "49%",
                  marginBottom: 0,
                }}
              >
                <Input />
              </Form.Item>
            </Form.Item>

            <Form.Item label="Company name">
              <Input />
            </Form.Item>

            <Form.Item label="Email address">
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                { required: true, message: "Please input your password!" },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={classNames.ctaButton}
              >
                Create company account
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <div className={classNames.footer}>
          <div className={classNames.link}>
            Already have an account? <Button type="link">Login here</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
