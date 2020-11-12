import React from "react";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
 import {useHistory} from "react-router-dom";
import {api} from "../../service/api";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};
const LoginPage = () => {

  const history = useHistory();
  const onFinish = values => {
    //console.log("Success:", values);
    const chkLogin = api.checkLoginUser(values.username,values.password);
    
    if(chkLogin){
       //cho vao trang homePage
      window.location.href = "/";
    }else{
       //van o lai trang dang nhap
       history.push("/login?state=fail");
    }
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Row>
        <Col span={12} offset={6}>
          <Form
            {...layout}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                { required: true, message: "Please input your username!" },
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

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Col>
      </Row>
    </>
  );
};
export default LoginPage;
