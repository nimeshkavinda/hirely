import classNames from "./CreateJob.module.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Form, Input, Button, Select, Checkbox, message } from "antd";
import { BsPlus } from "react-icons/bs";
import jobTypes from "../../../data/jobTypes.data";
import industries from "../../../data/industries.data";
import locations from "../../../data/locations.data";
// import { useNavigate } from "react-router-dom";
import ac from "../../../redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const CreateJob = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  // const navigation = useNavigate();

  const employerData = useSelector(({ getEmployerByUid }) =>
    getEmployerByUid.data ? getEmployerByUid.data[0] : {}
  );

  const onFinish = (data) => {
    console.log("form", data);
    dispatch(
      ac.createJob({
        ...data,
        company: {
          uid: employerData?.uid,
          companyName: employerData?.companyName,
          companyLogo: employerData?.companyLogo,
        },
        candidates: {},
      })
    );
  };

  const createJob = useSelector(({ createJob }) => createJob);

  const createJobFetching = useSelector(({ createJob: { fetching } }) => {
    return fetching;
  });

  useEffect(() => {
    if (createJob.data?.status === "success") {
      message.success("Job created successfully");
    }
    if (createJob.error) {
      message.error("Failed to create job");
    }
  }, [createJob]);

  return (
    <>
      <div className={classNames.wrapper}>
        <Header />
      </div>
      <div className={classNames.heading}>Create job</div>
      <div className={classNames.formWrapper}>
        <Form layout="vertical" form={form} onFinish={onFinish}>
          <Form.Item
            label="Job title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input job title!",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Form.Item
              label="Industry"
              name="industry"
              rules={[
                {
                  required: true,
                  message: "Please input industry!",
                },
              ]}
              style={{ display: "inline-block", width: "49%", float: "left" }}
            >
              <Select>
                {industries.map((type) => (
                  <Select.Option key={type.id} value={type.value}>
                    {type.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
            <Form.Item
              label="Job type"
              name="jobType"
              rules={[
                {
                  required: true,
                  message: "Please input job type!",
                },
              ]}
              style={{ display: "inline-block", width: "49%", float: "right" }}
            >
              <Select>
                {jobTypes.map((type) => (
                  <Select.Option key={type.id} value={type.value}>
                    {type.name}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </Form.Item>
          <Form.Item
            label="Location"
            name="location"
            rules={[
              {
                required: true,
                message: "Please input location!",
              },
            ]}
          >
            <Select>
              {locations.map((location, index) => (
                <Select.Option key={index} value={location}>
                  {location}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item
            label="Salary"
            name="salary"
            rules={[
              {
                required: true,
                message: "Please input salary!",
              },
            ]}
          >
            <Input addonAfter={"LKR"} />
          </Form.Item>
          <Form.Item
            label="Job description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input job description!",
              },
            ]}
          >
            <Input.TextArea showCount maxLength={2500} />
          </Form.Item>
          <Form.Item name="isRemote" valuePropName="checked">
            <Checkbox>This is a remote job</Checkbox>
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className={classNames.submitButton}
              loading={createJobFetching}
            >
              <BsPlus />
              <span>Create new job</span>
            </Button>
          </Form.Item>
        </Form>
      </div>
      <Footer />
    </>
  );
};

export default CreateJob;
