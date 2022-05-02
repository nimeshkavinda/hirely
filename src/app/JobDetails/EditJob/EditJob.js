import classNames from "./EditJob.module.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Form, Input, Button, Select, Checkbox, Spin, message } from "antd";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import ac from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import industries from "../../../data/industries.data";
import jobTypes from "../../../data/jobTypes.data";
import locations from "../../../data/locations.data";
import { useNavigate } from "react-router-dom";

const EditJob = () => {
  const urlParams = useParams();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const navigation = useNavigate();

  useEffect(() => {
    dispatch(ac.getJobById(urlParams.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getJobById = useSelector(({ getJobById }) =>
    getJobById.data ? getJobById.data[0] : {}
  );

  const getJobByIdFetching = useSelector(({ getJobById: { fetching } }) => {
    return fetching;
  });

  useEffect(() => {
    form.setFieldsValue({
      title: getJobById?.title,
      industry: getJobById?.industry,
      jobType: getJobById?.jobType,
      location: getJobById?.location,
      salary: getJobById?.salary,
      description: getJobById?.description,
      isRemote: getJobById?.isRemote,
    });
  }, [getJobByIdFetching, getJobById, dispatch, form]);

  const onUpdateJob = (data) => {
    dispatch(ac.updateJob(urlParams.id, data));
  };

  const updateJob = useSelector(({ updateJob }) =>
    updateJob.data ? updateJob.data : {}
  );

  const updateJobFetching = useSelector(({ updateJob: { fetching } }) => {
    return fetching;
  });

  useEffect(() => {
    if (updateJob?.status === "success") {
      message.success("Job has been updated successfully");
    }
    if (updateJob?.error) {
      message.error("Failed to update job");
    }
  }, [updateJob]);

  const onDeleteJob = () => {
    dispatch(ac.deleteJob(urlParams.id));
  };

  const deleteJob = useSelector(({ deleteJob }) =>
    deleteJob.data ? deleteJob.data : {}
  );

  const deleteJobFetching = useSelector(({ deleteJob: { fetching } }) => {
    return fetching;
  });

  useEffect(() => {
    if (deleteJob?.status === "success") {
      message.success("Job has been deleted successfully");
      // navigation("/app");
    }
    if (deleteJob?.error) {
      message.error("Failed to delete job");
    }
  }, [deleteJob, navigation]);

  return (
    <>
      <div className={classNames.wrapper}>
        <Header />
      </div>
      <div className={classNames.heading}>Edit job</div>
      <Spin
        size="large"
        spinning={getJobByIdFetching || updateJobFetching || deleteJobFetching}
      >
        <div className={classNames.formWrapper}>
          <Form layout="vertical" form={form} onFinish={onUpdateJob}>
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
                style={{
                  display: "inline-block",
                  width: "49%",
                  float: "right",
                }}
                rules={[
                  {
                    required: true,
                    message: "Please input job type!",
                  },
                ]}
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
            <Form.Item className={classNames.buttonWrapper}>
              <Button
                type="primary"
                htmlType="submit"
                loading={updateJobFetching}
              >
                Update job
              </Button>
              <Button
                type="primary"
                danger
                onClick={onDeleteJob}
                loading={deleteJobFetching}
              >
                Delete job
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Spin>
      <Footer />
    </>
  );
};

export default EditJob;
