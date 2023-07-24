import { Link, useNavigate } from "react-router-dom";
import "../css/Login.css"
import { useEffect, useState } from "react";
import {Button, message} from 'antd'
import { useLoginContext } from "./LoginContext";
    //  kminchelle 0lelplR
function Login(props) {

    const {setLoginContext, loginContext} = useLoginContext();
    
    const navigate = useNavigate();



    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
    
      const [loading, setLoading] = useState(false)


    const signInHandle =  (e) => {
        e.preventDefault()
       
        try {
            setLoading(true)
   
        
            fetch('http://127.0.0.1:5000/auth', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                
   
                    
                username: formData.username,
                password: formData.password,
                // expiresInMins: 60, // optional
                })
            })
            .then(res => res.json())
            .then(data => {
                if(data && data.id)
                {   
                    const updatedLoginContext = {...loginContext, ...data}
                    setLoginContext(updatedLoginContext)
                    message.success('Logged in Successfully')
                    navigate('/Home')

                }
                 
                else if(data && data.message)
                    message.error(data.message)

            });

        }   catch (error) {
                console.error("Error occurred:", error);
                // Handle error, e.g., display error message
            }
            //  kminchelle 0lelplR
           
          
        setFormData({
            username: "",
            password: ""
        });
      
        setLoading(false)

    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value
        }));
      };

    return (
        <div className="login-body">
            <div className="login-forum-div">
                <form onSubmit={signInHandle}>
                    <div className="form-logo">XYX STORE</div>
                    <div>
                        <div className="form-welcome">Welcome back !!!</div>
                        <div className="form-sign">Sign in</div>
                    </div>
                    <div className="login-form-form">
    
                        <label htmlFor="name">User Name</label>
                        <input 
                            //type=name" 
                            name="username" 
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter User Name" 
                        />
                        <label htmlFor="Password">Password</label>
                        <input
                            name="password"
                            type="password" 
                            placeholder="Enter Password"
                           
                            onChange={handleInputChange}
                            value={formData.password}
                            />
                        <div className="form-butn-container">
                            <Button 
                                className="form-butn" 
                                type="submit" 
                                style={{padding: ' 0 1em', }}
                                loading={loading}
                                onClick={signInHandle}
                            >
                                SIGN IN
                            </Button>

                        </div>
                        
                        <div className="form-footer">
                            I don&apos;t have an account? <Link className='form-link' to = '/Signup'>Sign up</Link>
                        </div>
                    </div>
                   
                </form>

            </div>
            <div className="empty-div"></div>

        </div>
    )

    }

export default Login;