import classNames from "./Login.module.scss";
import { Card, Form, Input, Button } from "antd";

const Login = () => {
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.authWrapper}>
        <div className={classNames.header}>
          <div>Welcome back to</div>
          <div className={classNames.logo}>Hirely.</div>
        </div>
        <Card className={classNames.formCard}>
          <Form layout="vertical">
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
              ]}
            >
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
                Login
              </Button>
            </Form.Item>
            <div className={classNames.link}>
              Forgot password? <Button type="link">Reset here</Button>
            </div>
          </Form>
        </Card>
        <div className={classNames.footer}>
          <div className={classNames.link}>
            New to Hirely? <Button type="link">Register here</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
