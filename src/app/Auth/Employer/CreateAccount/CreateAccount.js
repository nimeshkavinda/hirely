import classNames from "./CreateAccount.module.scss";
import { Card, Form, Input, Button, Upload, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import ac from "../../../../redux/actions";
import { useEffect, useState } from "react";
import { PlusOutlined } from "@ant-design/icons";

const CreateAccount = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState();
  const [empAccount, setEmpAccount] = useState();

  const handlePhotoChange = (data) => {
    let file = data.file;
    let reader = new FileReader();
    reader.onload = (e) => {
      file.base64 = e.target.result;
    };
    reader.readAsDataURL(file);
    setImageUrl(file);
    setEmpAccount(file.base64);
  };

  const onFinish = (data) => {
    setEmpAccount({ ...data, companyLogo: imageUrl.base64 });
    dispatch(ac.empSignUp(data.email, data.password));
  };

  const empSignUp = useSelector(({ empSignUp }) => empSignUp);

  const empSignUpFetching = useSelector(({ empSignUp: { fetching } }) => {
    return fetching;
  });

  const empCreateAcc = useSelector(({ createEmpAcc }) => createEmpAcc);

  const empCreateAccFetching = useSelector(({ createEmpAcc: { fetching } }) => {
    return fetching;
  });

  useEffect(
    function () {
      if (empSignUp.data) {
        dispatch(
          ac.createEmpAcc({
            ...empAccount,
            uid: empSignUp.data.uid,
            jobs: {},
            candidates: {},
          })
        );
        // message.success("Company account has been created. Please login ");
        // navigation("/admin-login");
      }
      if (empSignUp.error) {
        message.error(empSignUp.error.code);
      }
    },
    [empSignUp, empAccount, dispatch, navigation]
  );

  useEffect(
    function () {
      if (empCreateAcc.data?.status === "success") {
        message.success("Company account has been created. Please login ");
        navigation("/admin-login");
      }
      if (empCreateAcc.error) {
        message.error(empCreateAcc.error);
      }
    },
    [empCreateAcc, navigation]
  );

  return (
    <div className={classNames.wrapper}>
      <div className={classNames.authWrapper}>
        <div className={classNames.header}>
          <div>Create your company account</div>
        </div>
        <Card className={classNames.formCard}>
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item label="Company logo">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                beforeUpload={() => false}
                accept="image/png,image/jpeg"
                onChange={handlePhotoChange}
                maxCount={1}
                // style={{ display: `${showUpload ? "block" : "none"}` }}
                // disabled={showUpload ? false : true}
              >
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
              <span style={{ color: "#ee6969" }}>
                {!imageUrl && "Please upload company logo"}
              </span>
            </Form.Item>
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
              label="Company name"
              name="companyName"
              rules={[
                {
                  required: true,
                  message: "Please input your Company name!",
                },
              ]}
            >
              <Input />
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
                disabled={!imageUrl ? true : false}
                loading={empSignUpFetching || empCreateAccFetching}
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
