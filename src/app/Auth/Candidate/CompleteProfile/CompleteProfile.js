import classNames from "./CompleteProfile.module.scss";
import { Card, Form, Input, Button, Upload } from "antd";
import { AiOutlineUpload } from "react-icons/ai";
import { GrAdd } from "react-icons/gr";

const CompleteProfile = () => {
  return (
    <div className={classNames.wrapper}>
      <div className={classNames.authWrapper}>
        <div className={classNames.header}>
          <div>Almost there</div>
          <div>Please complete registration</div>
        </div>
        <Card className={classNames.formCard}>
          <Form layout="vertical">
            <Form.Item label="Profile photo">
              <Upload
                name="avatar"
                listType="picture-card"
                className="avatar-uploader"
                showUploadList={false}
              >
                <GrAdd />
              </Upload>
            </Form.Item>

            <Form.Item label="Your primary role">
              <Input />
            </Form.Item>

            <Form.Item label="About">
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
              >
                Complete profile
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

export default CompleteProfile;
