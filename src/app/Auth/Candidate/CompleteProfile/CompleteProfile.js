import classNames from "./CompleteProfile.module.scss";
import { Card, Form, Input, Button, Upload, message } from "antd";
import { AiOutlineUpload } from "react-icons/ai";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import ac from "../../../../redux/actions";
import { PlusOutlined } from "@ant-design/icons";

const CompleteProfile = () => {
  const navigation = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();
  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState();
  // const [candidateAcc, setCandidateAcc] = useState();

  const getBase64 = (file) => {
    return new Promise(function (resolve) {
      var reader = new FileReader();
      reader.onloadend = function () {
        resolve(reader.result);
      };
      reader.readAsDataURL(file);
    });
  };

  const handlePhotoChange = async (data) => {
    let img = await getBase64(data.file);
    setImageUrl(img);
    dispatch(ac.updateCandidate(state.uid, { profilePhoto: img }));
  };

  const updateCandidate = useSelector(({ updateCandidate }) => updateCandidate);

  const updateCandidateFetching = useSelector(
    ({ updateCandidate: { fetching } }) => {
      return fetching;
    }
  );

  const onFinish = (data) => {
    dispatch(ac.updateCandidate(state.uid, data));
    if (
      !updateCandidateFetching &&
      updateCandidate.data.role !== "" &&
      updateCandidate.data.about !== ""
    ) {
      message.success("Profile has been completed. Please login");
      navigation("/login");
    }
    if (updateCandidate.error) {
      message.error("Failed to complete profile");
    }
  };

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
                beforeUpload={() => false}
                accept="image/png,image/jpeg"
                onChange={handlePhotoChange}
                maxCount={1}
              >
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
              <span style={{ color: "#ee6969" }}>
                {!imageUrl && "Please upload profile photo"}
              </span>
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
