import classNames from "./Login.module.scss";
import { Card, Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ac from "../../../../redux/actions";
import { useEffect } from "react";

const Login = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

  const onFinish = (data) => {
    dispatch(ac.empSignIn(data.email, data.password));
  };

  const empSignIn = useSelector(({ empSignIn }) => empSignIn);

  const empSignInFetching = useSelector(({ empSignIn: { fetching } }) => {
    return fetching;
  });

  useEffect(
    function () {
      if (empSignIn.data) {
        message.success("Login success");
        // navigation("/app");
      }
      if (empSignIn.error) {
        message.error(empSignIn.error.code);
      }
    },
    [empSignIn, dispatch, navigation]
  );

  return (
    <div className={classNames.wrapper}>
      <div className={classNames.authWrapper}>
        <div className={classNames.header}>
          <div>Login to your Hirely account</div>
        </div>
        <Card className={classNames.formCard}>
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item
              name="email"
              label="E-mail address"
              rules={[
                {
                  type: "email",
                  message: "The input is not valid E-mail!",
                },
                {
                  required: true,
                  message: "Please input your E-mail!",
                },
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
                loading={empSignInFetching}
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
            Don't have an account?{" "}
            <Button type="link" onClick={() => navigation("/register-company")}>
              Register here
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
