import { Link } from "react-router-dom";
import "../css/Login.css"
function Login(props) {
    

    return (
        <div className="login-body">
            <div className="forum-div">
                <form>
                    <div className="form-logo">XYX STORE</div>
                    <div>
                        <div className="form-welcome">Welcome back !!!</div>
                        <div className="form-sign">Sign in</div>
                    </div>
                    <div className="form-form">
    
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder="Enter Email" />
                        <label htmlFor="Password">Password</label>
                        <input type="password" placeholder="Enter Password"/>
                        <div className="form-butn-container">
                            <button className="form-butn">SIGN IN</button>
                        </div>
                        
                        <div className="form-footer">
                            I don't have an account? <Link className='form-link' to = '/not'>Sign up</Link>
                        </div>
                    </div>
                   
                </form>

            </div>
            <div className="empty-div"></div>

        </div>
    )
}

export default Login;