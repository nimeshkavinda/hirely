import classNames from "./CreateAccount.module.scss";
import { Card, Form, Input, Button, Upload } from "antd";
import { GrAdd } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../../../redux/actions";
import { useEffect } from "react";

const CreateAccount = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  const empSignUp = useSelector(({ signUp }) => signUp);

  const fetching = useSelector(({ empSignUp: { fetching } }) => {
    return fetching;
  });

  const onSubmit = (data) => {
    console.log("Sign up data: ", data);
    dispatch(ac.empSignUp(data.email, data.password));
  };

  useEffect(
    function () {
      if (empSignUp.data) {
        console.log("Signup success data: ", empSignUp.data);
        // navigation("/");
      }
      if (empSignUp.error) {
        console.log("fail");
      }
    },
    [empSignUp, dispatch, navigation]
  );

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
            Already have an account?{" "}
            <Button type="link" onClick={() => navigation("/admin-login")}>
              Login here
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
