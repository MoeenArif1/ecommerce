//add user cart and other with sign up
import { Link } from "react-router-dom";
import "../css/Signup.css"
import { Form, Input, Button, Checkbox, Radio, InputNumber, message } from 'antd';

function Signup(props) {

    const createCart = (id) => {


        fetch('https://dummyjson.com/carts/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                userId: id,
                products: [{
                    // remove after
                    id:123,
                    quantity: 0,
                }]
                
            })
            })
            .then(res => res.json())
            .then((data) => {
            
                if (data  && data.message) {
                    message.error(data.message)
                    
                    
                }
                else{
                    message.success("Cart created")
                }
               
            });
            
    }
   
    const onFinish =  (values) => {
        fetch('https://dummyjson.com/users/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: values.username,
                password: values.password,
                gender: values.gender,
                phone: values.phoneNumber,
                address: values.address
        
            })
            })
            .then(res => res.json())
            .then((data) => {
                if (data && data.id){
                    message.success("User Successfully Created")
                    createCart(data.id)
        
                }
                else if (data && data.message) {
                    message.error(data.message)
                    
                }
 
            });
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
                                label="User Name"
                                name="username"
                                rules={[
                                { required: true, message: 'Please enter your username' },
                                { type: 'username', message: 'Please enter a valid username' },
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
                                label="Address"
                                name="address"
                                rules={[
                                { required: true, message: 'Please enter your address' },
                                // Add additional validation rules as needed
                                ]}
                            > 
                                <Input/>
                                
                            </Form.Item>
                            <Form.Item
                                label="Phone Number"
                                name="phoneNumber"
                                rules={[
                                { required: true, message: 'Please enter your phone number' },
                                // Add additional validation rules as needed
                                ]}
                            >
                                <InputNumber style={{ width: '100%' }} />
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


