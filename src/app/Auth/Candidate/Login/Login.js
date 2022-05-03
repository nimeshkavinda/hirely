import classNames from "./Login.module.scss";
import { Card, Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ac from "../../../../redux/actions";

const Login = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (data) => {
    console.log("login data:", data);
    // dispatch(ac.signIn(data.email, data.password));
  };

  const signIn = useSelector(({ signIn }) => signIn);

  const signInFetching = useSelector(({ signIn: { fetching } }) => {
    return fetching;
  });

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
                loading={signInFetching}
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
            New to Hirely?{" "}
            <Button type="link" onClick={() => navigation("/register")}>
              Register here
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
