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
    console.log("login data:", data);
    dispatch(ac.signIn(data.email, data.password));
  };

  const signIn = useSelector(({ signIn }) => signIn);

  const signInFetching = useSelector(({ signIn: { fetching } }) => {
    return fetching;
  });

  const getCandidateByUid = useSelector(
    ({ getCandidateByUid }) => getCandidateByUid
  );

  const getCandidateByUidFetching = useSelector(
    ({ getCandidateByUid: { fetching } }) => {
      return fetching;
    }
  );

  useEffect(
    function () {
      if (signIn.data) {
        dispatch(ac.getCandidateByUid(signIn.data.uid));
      }
      if (signIn.error) {
        message.error(signIn.error.code);
      }
    },
    [signIn, dispatch, navigation]
  );

  useEffect(
    function () {
      if (getCandidateByUid.data) {
        localStorage.setItem("uid", signIn.data.uid);
        localStorage.setItem("accessToken", signIn.data.accessToken);
        localStorage.setItem("userType", "candidate");
        navigation("/");
        message.success("Candidate login success");
      }
      if (getCandidateByUid.error) {
        message.error("Failed to login as candidate");
      }
    },
    [getCandidateByUid, signIn, navigation]
  );

  return (
    <div className={classNames.wrapper}>
      <div className={classNames.authWrapper}>
        <div className={classNames.header}>
          <div>Welcome back to</div>
          <div className={classNames.logo}>Hirely.</div>
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
                loading={signInFetching || getCandidateByUidFetching}
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
