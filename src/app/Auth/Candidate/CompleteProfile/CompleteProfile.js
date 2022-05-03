import classNames from "./CompleteProfile.module.scss";
import { Card, Form, Input, Button, Upload, message } from "antd";
import { AiOutlineUpload } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ac from "../../../../redux/actions";

const CompleteProfile = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState();
  const [candidateAcc, setCandidateAcc] = useState();

  const handlePhotoChange = (data) => {
    let file = data.file;
    let reader = new FileReader();
    reader.onload = (e) => {
      file.base64 = e.target.result;
    };
    reader.readAsDataURL(file);
    setImageUrl(file);
    setCandidateAcc(file.base64);
  };

  const signUp = useSelector(({ signUp }) => signUp);

  const onFinish = (data) => {
    console.log("data: ", data);
    console.log("candidate acc", candidateAcc);
    // setCandidateAcc({ ...data, profilePhoto: imageUrl.base64, resume: "" });
    // dispatch(ac.updateCandidate(signUp.data.uid, { data }));
  };

  const updateCandidate = useSelector(({ updateCandidate }) => updateCandidate);

  const updateCandidateFetching = useSelector(
    ({ updateCandidate: { fetching } }) => {
      return fetching;
    }
  );

  // useEffect(
  //   function () {
  //     if (updateCandidate.data?.status === "success") {
  //       message.success("Profile has been completed. Please login ");
  //       // navigation("/login");
  //     }
  //     if (updateCandidate.error) {
  //       message.error(updateCandidate.error);
  //     }
  //   },
  //   [updateCandidate, navigation]
  // );

  return (
    <div className={classNames.wrapper}>
      <div className={classNames.authWrapper}>
        <div className={classNames.header}>
          <div>Almost there</div>
          <div>Please complete registration</div>
        </div>
        <Card className={classNames.formCard}>
          <Form layout="vertical" form={form} onFinish={onFinish}>
            <Form.Item label="Profile photo">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
                onChange={handlePhotoChange}
              >
                <GrAdd />
              </Upload>
            </Form.Item>

            <Form.Item
              label="Your primary role"
              name="role"
              rules={[
                {
                  required: true,
                  message: "Please input your primary role!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="About"
              name="about"
              rules={[
                {
                  required: true,
                  message: "Please input about experience!",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item label="Upload resume">
              <Upload>
                <Button icon={<AiOutlineUpload />}>Click to Upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={classNames.ctaButton}
                loading={updateCandidateFetching}
              >
                Complete profile
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

export default CompleteProfile;
