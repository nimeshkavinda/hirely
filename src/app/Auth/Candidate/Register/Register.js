import classNames from "./Register.module.scss";
import { Card, Form, Input, Button, Select } from "antd";

const Register = () => {
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.loginWrapper}>
        <div className={classNames.header}>
          <div>Let's get you started in</div>
          <div className={classNames.logo}>Hirely.</div>
        </div>
        <Card className={classNames.formCard}>
          <Form layout="vertical">
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

            <Form.Item label="Email address">
              <Input />
            </Form.Item>

            <Form.Item label="Email address">
              <Input />
            </Form.Item>

            <Form.Item label="Mobile number">
              <Input.Group compact>
                <Select defaultValue="+94" style={{ width: "20%" }}>
                  <Select.Option value="+94">+94</Select.Option>
                </Select>
                <Input style={{ width: "80%" }} />
              </Input.Group>
            </Form.Item>

            <Form.Item label="Password">
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={classNames.ctaButton}
              >
                Create account
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

export default Register;
