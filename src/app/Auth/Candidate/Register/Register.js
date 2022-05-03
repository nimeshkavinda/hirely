import classNames from "./Register.module.scss";
import { Card, Form, Input, Button, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ac from "../../../../redux/actions";

const Register = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [candidateAcc, setCandidateAcc] = useState();

  const onFinish = (data) => {
    console.log("acc data: ", data);
    setCandidateAcc(data);
    dispatch(ac.signUp(data.email, data.password));
  };

  const signUp = useSelector(({ signUp }) => signUp);

  const signUpFetching = useSelector(({ signUp: { fetching } }) => {
    return fetching;
  });

  const candidateCreateAcc = useSelector(
    ({ createCandidateAcc }) => createCandidateAcc
  );

  const candidateCreateAccFetching = useSelector(
    ({ createCandidateAcc: { fetching } }) => {
      return fetching;
    }
  );

  useEffect(
    function () {
      if (signUp.data) {
        dispatch(
          ac.createCandidateAcc({
            ...candidateAcc,
            uid: signUp.data.uid,
            profilePhoto: "",
            role: "",
            about: "",
            resume: "",
            jobs: [],
          })
        );
      }
      if (signUp.error) {
        message.error(signUp.error.code);
      }
    },
    [signUp, candidateAcc, dispatch]
  );

  useEffect(
    function () {
      if (candidateCreateAcc.data?.status === "success") {
        message.success(
          "Account has been created. Please complete your profile"
        );
        navigation("/complete-profile", {
          state: {
            uid: signUp.data.uid,
          },
        });
      }
      if (candidateCreateAcc.error) {
        message.error(candidateCreateAcc.error);
      }
    },
    [candidateCreateAcc, signUp.data, navigation]
  );

  return (
    <div className={classNames.wrapper}>
      <div className={classNames.authWrapper}>
        <div className={classNames.header}>
          <div>Let's get you started in</div>
          <div className={classNames.logo}>Hirely.</div>
        </div>
        <Card className={classNames.formCard}>
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item>
              <Form.Item
                label="First name"
                name="firstName"
                rules={[
                  {
                    required: true,
                    message: "Please input your first name!",
                  },
                ]}
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
                name="lastName"
                rules={[
                  {
                    required: true,
                    message: "Please input your last name!",
                  },
                ]}
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
              label="Mobile number"
              name="mobile"
              rules={[
                {
                  required: true,
                  message: "Please input your mobile number!",
                },
              ]}
            >
              {/* <Input.Group compact>
                <Select defaultValue="+94" style={{ width: "20%" }}>
                  <Select.Option value="+94">+94</Select.Option>
                </Select>
                <Input style={{ width: "80%" }} />
              </Input.Group> */}
              <Input type="number" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
              hasFeedback
            >
              <Input.Password />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={classNames.ctaButton}
                loading={signUpFetching || candidateCreateAccFetching}
              >
                Create account
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <div className={classNames.footer}>
          <div className={classNames.link}>
            Already have an account?{" "}
            <Button type="link" onClick={() => navigation("/login")}>
              Login here
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
