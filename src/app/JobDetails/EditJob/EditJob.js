import classNames from "./EditJob.module.scss";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Form, Input, Button, Select, Checkbox, Spin } from "antd";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ac from "../../../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import industries from "../../../data/industries.data";
import jobTypes from "../../../data/jobTypes.data";
import locations from "../../../data/locations.data";

const EditJob = () => {
  const urlParams = useParams();
  const dispatch = useDispatch();
  const [form] = Form.useForm();

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

  const updateJob = (data) => {
    console.log("Data", data);
  };

  return (
    <>
      <div className={classNames.wrapper}>
        <Header />
      </div>
      <div className={classNames.heading}>Edit job</div>
      <Spin size="large" spinning={getJobByIdFetching}>
        <div className={classNames.formWrapper}>
          <Form layout="vertical" form={form} onFinish={updateJob}>
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
              <Button type="primary" htmlType="submit">
                Update job
              </Button>
              <Button type="primary" danger>
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
