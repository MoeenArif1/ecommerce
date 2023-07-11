import { Link } from "react-router-dom";
import "../css/Signup.css"
import { Form, Input, Button, Checkbox, Radio } from 'antd';
function Signup(props) {
    const onFinish = (values) => {
        console.log('Received values:', values);
      };



    return (
        <div className="signup-body">
            <div className="signup-forum-div">
                <div className="form">
                    <div className="signup-form-logo">XYX STORE</div>
                    <div>
                        <div className="signup-form-welcome">Welcome</div>
                        <div className="signup-form-sign">Sign up</div>
                    </div>
                    <div className="signup-form-form">
                        <Form name="signupForm" onFinish={onFinish} labelCol={{span:10}} wrapperCol={{span:14}}>
                            <Form.Item
                                label="Name"
                                name="name"
                                rules={[{ required: true, message: 'Please enter your name' }]}
            
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Email"
                                name="email"
                                rules={[
                                { required: true, message: 'Please enter your email' },
                                { type: 'email', message: 'Please enter a valid email' },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[{ required: true, message: 'Please enter your password' }]}
                                // style={{width: 120}}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                label="Confirm Password"
                                name="confirmPassword"
                                dependencies={['password']}
                                rules={[
                                { required: true, message: 'Please confirm your password' },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                    if (!value || getFieldValue('password') === value) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error('The passwords do not match'));
                                    },
                                }),
                                ]}
                            >
                                <Input.Password />
                            </Form.Item>

                            <Form.Item
                                label="Gender"
                                name="gender"
                                rules={[{ required: true, message: 'Please select your gender' }]}
                            >
                                <Radio.Group>
                                <Radio value="male">Male</Radio>
                                <Radio value="female">Female</Radio>
                                </Radio.Group>
                            </Form.Item>

                            <Form.Item
                                wrapperCol={{span:24}}
                                style={{textAlign: "center"}}
                                name="agreement"
                                valuePropName="checked"
                                rules={[
                                { required: true, message: 'Please accept the user agreement' },
                                ]}
                            >
                                <Checkbox>
                                    I agree to the <a href="/user-agreement">user agreement</a>
                                </Checkbox>
                            </Form.Item>

                            <Form.Item wrapperCol={{span:24}}>
                                <Button className="signup-butn"
                                block type="primary" htmlType="submit">
                                Sign up
                                </Button>
                            </Form.Item>
                        </Form>
                        <div className="signup-form-footer">
                            <span>I already have an account? </span> <span className="last"><Link className='form-link' to = '/Login'>Sign in</Link> </span>
                        </div> 
                       
                    </div>
                   
                   
                </div>
               
            </div>
            <div className="empty-div"></div>

        </div>
    )
}

export default Signup;


